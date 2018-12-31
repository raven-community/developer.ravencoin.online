---
title: Address UTXO
author: Gabriel Cardona
contributors: [
MSFTserver,
]
publishedAt: 2018-12-20
updatedAt: 2018-12-20
---

Sending transactions is at the heart of RVN. RVNBOX has been able to send transactions for a while but w/ RVNBOX Cloud and [REST](https://rest.ravencoin.online) taking shape we wanted to revisit the steps for sending transactions to show how to best leverage the new functionality.

## Setup

Before we get started let’s create an HDNode and send it some satoshi.

### Mnemonic

First we generate a random 256 bit mnemonic.

```javascript
let mnemonic = RVNBOX.Mnemonic.generate(256)
// slam tag city glass asthma mention rich leader snake prevent fatal trick typical gallery scare sort clip wolf strike float dwarf just clip mail
```

### Root seed

From that mnemonic we create a root seed buffer.

```javascript
// root seed buffer
let rootSeed = RVNBOX.Mnemonic.toSeed(mnemonic)
```

### Master HD Node

With our root seed we can create a [BIP32](https://github.com/bitcoin/bips/blob/master/bip-0032.mediawiki) master hd node. The 2nd argument is the network. pass in `'ravencoin'` for mainnet and `'testnet'` for testnet.

```javascript
// master HDNode
let masterHDNode = RVNBOX.HDNode.fromSeed(rootSeed, 'ravencoin')
```

### Account

Next create a [BIP44](https://github.com/bitcoin/bips/blob/master/bip-0044.mediawiki) account. The 2nd argument is the BIP44 HD path.

```javascript
// HDNode of BIP44 account
let account = RVNBOX.HDNode.derivePath(masterHDNode, "m/44'/175'/0'")
```

### Change

Create the first external change address per BIP44.

```javascript
// derive the first external change address HDNode which is going to spend utxo
let change = RVNBOX.HDNode.derivePath(account, '0/0')
```

### Legacy Address

```javascript
// get the legacy address
let legacyAddress = RVNBOX.HDNode.toLegacyAddress(change)
// qqn2yf5jzrhwr3magjps5muz30akqqgsm5q7wcgkga
```

### Send some satoshis

Now we send a few satoshis to `qqn2yf5jzrhwr3magjps5muz30akqqgsm5q7wcgkga`.

With that all set up lets now look at leveraging RVNBOX Cloud.

## RVNBOX Cloud

RVNBOX Cloud is your Blockchain as a Service.’ We recently started integrating w/ `rvnbox-sdk` so you can leverage RVNBOX Cloud w/out any additional setup.

You can use [Address.utxo](../rvnbox/docs/address/#utxo) to get back a list of utxo for an address

```javascript
RVNBOX.Address.utxo(
  'qqn2yf5jzrhwr3magjps5muz30akqqgsm5q7wcgkga'
).then(
  result => {
    console.log(result)
    // [ { txid: 'aeaadaa9e952bf9fe02db6f261f31db2ab42224c9c8da73d78e2978eca372594',
    //   vout: 0,
    //   scriptPubKey: '76a91426a2269210eee1c77d44830a6f828bfb600110dd88ac',
    //   amount: 0.00006893,
    //   satoshis: 6893,
    //   height: 530048,
    //   confirmations: 1,
    //   legacyAddress: '14XGviVV31TudFn8TEkBduLFyLa8fwPE5G' } ]
  },
  err => {
    console.log(err)
  }
)
```

Now lets spend the utxo.

### TransactionBuilder instance

First create an instance of `TransactionBuilder`. Note the `'ravencoin'` argument is optional and it will default to mainnet if you pass nothing in. Pass in `'testnet'` to create testnet transactions. For this example we’ll use the mainnet.

```javascript
// instance of transaction builder
let transactionBuilder = new RVNBOX.TransactionBuilder('ravencoin')
```

### Original amount

Now get the original amount of satoshis from the utxo. This is returned from the call to `RVNBOX.Address.utxo`.

```javascript
// original amount of satoshis in vin
let originalAmount = result[0].satoshis
```

### And the index

Get the index of the vout which you want to spend.

```javascript
// index of vout
let vout = result[0].vout
```

### Get the txid

Next get the txid of the uxto you want to spend

```javascript
// txid of vout
let txid = result[0].txid
```

### Add the inputs

Now we’re ready to add the input to our `transactionBuilder` instance. First pass in the `txid` and next the `vout` index.

```javascript
// add input with txid and index of vout
transactionBuilder.addInput(txid, vout)
```

### Calculate the fee

Next use [RavenCoin.getByteCount](../rvnbox/docs/ravencoin#getByteCount) to calculate the fee. Here we pass in 2 objects describing the type and number of inputs/outputs. For this example we have 1 `P2PKH` input and 1 `P2PKH` output.

```javascript
// get byte count to calculate fee. paying 1 satoshi/byte
let byteCount = RVNBOX.RavenCoin.getByteCount({ P2PKH: 1 }, { P2PKH: 1 })
// 192
```

### Calculate the fee

A transaction w/ 1 `P2PKH` input and 1 `P2PKH` output is 192 bytes. We subtract that from the original amount of satoshis to get a fee of 1 satoshi per byte.

```javascript
// amount to send to receiver. It's the original amount - 1 satoshi/byte for tx size
let sendAmount = originalAmount - byteCount
```

### Add the output

Add the address where you want to send the satoshis and the send amount which is the original amount minus the 1 satoshi per byte.

```javascript
// add output w/ address and amount to send
transactionBuilder.addOutput(
  'qpuax2tarq33f86wccwlx8ge7tad2wgvqgjqlwshpw',
  sendAmount
)
```

### Get the node’s keypair

Now get the change node’s keypair to sign the transaction.

```javascript
// keypair
let keyPair = RVNBOX.HDNode.toKeyPair(change)
```

### Sign input

Sign the input. Pass in the index of the input you’re signing. In this case we only have 1 input so the index is `0`. Next pass in the node’s keypair to sign the tx, a placeholder `redeemScript` var which isn’t needed here, the hash type which is `SIGHASH_ALL` and lastly the original amount of satoshis in the utxo which we’re spending.

```javascript
// sign w/ HDNode
let redeemScript
transactionBuilder.sign(
  0,
  keyPair,
  redeemScript,
  transactionBuilder.hashTypes.SIGHASH_ALL,
  originalAmount
)
```

### Build and get raw hex

Now build the transaction and get the raw hex.

```javascript
// build tx
let tx = transactionBuilder.build()
// output rawhex
let hex = tx.toHex()
```

### POST the transaction

Finally we’re ready to send our transaction to the RVN network.

```javascript
// sendRawTransaction to running RVN node
RVNBOX.RawTransactions.sendRawTransaction(hex).then(
  result => {
    console.log(result)
  },
  err => {
    console.log(err)
  }
)
```

### All together now

```javascript
// include RVNBOX
let RVNBOXSDK = require('rvnbox-sdk/lib/rvnbox-sdk').default

// Instantiate RVNBOX and pass in creds for a full node.
let RVNBOX = new RVNBOXSDK()

// create mnemonic
let mnemonic =
  'slam tag city glass asthma mention rich leader snake prevent fatal trick typical gallery scare sort clip wolf strike float dwarf just clip mail'

// root seed buffer
let rootSeed = RVNBOX.Mnemonic.toSeed(mnemonic)

// master HDNode
let masterHDNode = RVNBOX.HDNode.fromSeed(rootSeed, 'ravencoin')

// HDNode of BIP44 account
let account = RVNBOX.HDNode.derivePath(masterHDNode, "m/44'/175'/0'")

// derive the first external change address HDNode which is going to spend utxo
let change = RVNBOX.HDNode.derivePath(account, '0/0')

// get the legacy address
let legacyAddress = RVNBOX.HDNode.toLegacyAddress(change)
// qqn2yf5jzrhwr3magjps5muz30akqqgsm5q7wcgkga

RVNBOX.Address.utxo(
  'qqn2yf5jzrhwr3magjps5muz30akqqgsm5q7wcgkga'
).then(
  result => {
    console.log(result)
    // [ { txid: '51366a68d148f360c30714f878584ce534cad53e6827937c1040a18ef16f623e',
    //     vout: 0,
    //     scriptPubKey: '76a91426a2269210eee1c77d44830a6f828bfb600110dd88ac',
    //     amount: 0.00009613,
    //     satoshis: 9613,
    //     confirmations: 0,
    //     ts: 1527795652,
    //     legacyAddress: '14XGviVV31TudFn8TEkBduLFyLa8fwPE5G' } ]

    // instance of transaction builder
    let transactionBuilder = new RVNBOX.TransactionBuilder('ravencoin')
    // original amount of satoshis in vin

    let originalAmount = result[0].satoshis

    // index of vout
    let vout = result[0].vout

    // txid of vout
    let txid = result[0].txid

    // add input with txid and index of vout
    transactionBuilder.addInput(txid, vout)

    // get byte count to calculate fee. paying 1 satoshi/byte
    let byteCount = RVNBOX.RavenCoin.getByteCount({ P2PKH: 1 }, { P2PKH: 1 })
    // 192

    // amount to send to receiver. It's the original amount - 1 satoshi/byte for tx size
    let sendAmount = originalAmount - byteCount

    // add output w/ address and amount to send
    transactionBuilder.addOutput(
      'qpuax2tarq33f86wccwlx8ge7tad2wgvqgjqlwshpw',
      sendAmount
    )

    // keypair
    let keyPair = RVNBOX.HDNode.toKeyPair(change)

    // sign w/ HDNode
    let redeemScript
    transactionBuilder.sign(
      0,
      keyPair,
      redeemScript,
      transactionBuilder.hashTypes.SIGHASH_ALL,
      originalAmount
    )

    // build tx
    let tx = transactionBuilder.build()
    // output rawhex
    let hex = tx.toHex()

    // sendRawTransaction to running RVN node
    RVNBOX.RawTransactions.sendRawTransaction(hex).then(
      result => {
        console.log(result)
      },
      err => {
        console.log(err)
      }
    )
  },
  err => {
    console.log(err)
  }
)
```

### Success

If we did that correct we should get back a txid.

## Summary

This was to show step by step how to create a mnemonic, root seed, master node, bip44 account and bip44 change node. It showed how to create a Legacy address.

Once you have utxo which are spendable it showed how to call RVNBOX Cloud via `RVNBOX.Address.utxo` to get back a list of spendable utxo.

It next showed how to build a transaction, sign it and `POST` it to the RVN network.

If your app needs to send RVN transactions RVNBOX is the tool and this tutorial shows you how to make it happen.
