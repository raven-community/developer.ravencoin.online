---
title: Account Creation
author: Gabriel Cardona
contributors: [
MSFTserver,
]
publishedAt: 2018-12-20
updatedAt: 2018-12-20
---

Ravencoin wallets are really just collections of key pairs. Hierarchical Deterministic wallets are the state of the art for reliably creating and backing up collections of related keypairs. For more detail read Andreas’s in depth explanation about how they work in [Mastering Ravencoin](/mastering-ravencoin/3-keys-addresses-wallets/).

RVNBOX is an HD wallet which aims to be compliant w/ BIPS 32, 39, 43, 44. When you first fire up RVNBOX we create a random mnemonic from 16 bytes of entropy which we then use to create a root seed, master key and 10 default accounts.

### Generate mnemonic

You can configure how much entropy RVNBOX uses to create your mnemonic in the config section. More entropy means more words in your mnemonic. By default RVNBOX will use 16 bytes and create a 12 word mnemonic.

![Entropy Slider](https://bigearth.github.io/bitblog/assets/entropy-slider.png)

| Entropy | Mnemonic length (words) |
| :------ | :---------------------- |
| 128/16  | 12                      |
| 160/20  | 15                      |
| 129/24  | 18                      |
| 224/28  | 21                      |
| 256/32  | 24                      |

To do this we’re using NodeJS’s [`crypto.randomBytes`](https://nodejs.org/api/crypto.html#crypto_crypto_randombytes_size_callback) and the wonderful [BIP39.js](https://github.com/raven-community/bip39).

```javascript
let randomBytes = RVNBOX.Crypto.randomBytes(32)
let mnemonic = RVNBOX.Mnemonic.fromEntropy(randomBytes)
```

![Mnemonic](https://bigearth.github.io/bitblog/assets/mnemonic.png)

### Root seed

Next we take an optional password and combined w/ the mnemonic create a root seed. The number of potential seeds is 2^512.

![Optional Password`](https://bigearth.github.io/bitblog/assets/password.png)

```javascvript
let password = 'l337';
let rootSeed = RVNBOX.Mnemonic.toSeed(mnemonic, password);
```

### Master key

Finally we’re using [ravencoinlib-js](https://github.com/raven-community/ravencoinjs-lib) to create a masterkey from the rootSeed.

```javascript
let masterkey = RVNBOX.HDNode.fromSeed(rootSeed)
```

This masterkey can be used to create 4 billion child keys. Each of those child keys can produce 4 billion child keys recursively in a derivation path.

When you combine the number of potential mnemonics, seeds and nested child keys the potential Ravencoin address space is unfathomably large.

### Derivation Path

Due to the huge number of potential derivation paths BIPs 43 and 44 introduced conventions for adding meaning to the path. Specifically

```
m / purpose' / coin_type' / account' / change / address_index
```

`purpose'` is always set to 44 to signify that the wallet is BIP 44 compliant. `coin_type'` is set to 175 for $RVN. Then we create 10 accounts which are siblings and get the first private key in Wallet Import Format.

```javascript
let purpose = "44'"
let coin = "175'"
let addresses = []
for (let i = 0; i < 10; i++) {
  let path = `m/${purpose}/${coin}/${i}`
  let account = RVNBOX.HDNode.derivePath(masterkey, path)
  addresses.push(RVNBOX.HDNode.toWIF(RVNBOX.HDNode.derive(account, 0)))
}
```

You can optionally set your own custom derivation path.

![Derivation Path](https://bigearth.github.io/bitblog/assets/hd-path.png)

### Display to user

We don’t want to display the private key WIF by default to the user because it’s unsafe. Instead we get the publicKey and display that by default allowing the user to toggle visibility of the privateKeyWIF w/ a button click.

![Private WIF](https://bigearth.github.io/bitblog/assets/private-wif.png)

```javascript
let publicKey = RVNBOX.ECPair.toLegacyAddress(RVNBOX.ECPair.fromWIF(privKeyWIF))
```

![Base58Check](https://bigearth.github.io/bitblog/assets/base58check.png)

### Testnet

You can also toggle generating keys on the $RVN testnet.

![Testnet private](https://bigearth.github.io/bitblog/assets/testnet-wif.png)

![Testnet public](https://bigearth.github.io/bitblog/assets/testnet-public.png)

### Summary

RVNBOX aims to be an HD wallet which is compliant w/ BIPs 32, 39, 43 and 44. You can change the strength of the mnemonic, how many accounts are created, the derivation path, whether the addresses are displayed as Base58Check encoded and main or testnet.

### More info

- [BIP 32](https://github.com/bitcoin/bips/blob/master/bip-0032.mediawiki)
- [BIP 39](https://github.com/bitcoin/bips/blob/master/bip-0039.mediawiki)
- [BIP 43](https://github.com/bitcoin/bips/blob/master/bip-0043.mediawiki)
- [BIP 44](https://github.com/bitcoin/bips/blob/master/bip-0044.mediawiki)
