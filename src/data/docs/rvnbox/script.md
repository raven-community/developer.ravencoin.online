---
title: Script
icon: code
ordinal: 15
---

### `opcodes`

Script OP Codes

#### Result

opcodes `Object`

#### Examples

      // list all op codes
      RVNBOX.Script.opcodes;
      // { OP_FALSE: 0,
      //   OP_0: 0,
      //   OP_PUSHDATA1: 76,
      //   OP_PUSHDATA2: 77,
      //   OP_PUSHDATA4: 78,
      //   OP_1NEGATE: 79,
      //   OP_RESERVED: 80,
      //   OP_TRUE: 81,
      //   OP_1: 81,
      //   OP_2: 82,
      //   OP_3: 83,
      //   OP_4: 84,
      //   ...
      // }

      // get the op code for a word
      RVNBOX.Script.opcodes.OP_SPLIT
      // 127
      RVNBOX.Script.opcodes.OP_NUM2BIN
      // 128
      RVNBOX.Script.opcodes.OP_BIN2NUM
      // 129

### `encode`

Encode a Script buffer

#### Arguments

1.  scriptChunks `Array`

#### Result

buffer `Buffer`

#### Examples

      // encode P2PKH scriptSig to buffer
      let scriptSig = [
      Buffer.from('3045022100877e2f9c28421f0a850cc8ff66ba1d0f6c8dbe9e63e199c2c2600c9c15bf9d4402204d35b13d3cc202aa25722b2b1791442ebc5c39d898b609515260ad08f0e766a601', 'hex'),
      Buffer.from('02fb721b92025e775b1b84774e65d568d24645cb633275f5c26f5c3101b214a8fb', 'hex')
      ]
      RVNBOX.Script.encode(scriptSig);
      //

      // encode P2PKH scriptPubKey to buffer
      let scriptPubKey = [
      118,
      169,
      Buffer.from('24e9c07804d0ee7e5bda934e0a3ae8710fc007dd', 'hex'),
      136,
      172
      ];
      RVNBOX.Script.encode(scriptPubKey);
      //

### `decode`

Decode a Script buffer.

#### Arguments

1.  buffer `Buffer`

#### Result

decodedScript `Array`

#### Examples

      // decode P2PKH scriptSig buffer
      let scriptSigBuffer = Buffer.from("483045022100877e2f9c28421f0a850cc8ff66ba1d0f6c8dbe9e63e199c2c2600c9c15bf9d4402204d35b13d3cc202aa25722b2b1791442ebc5c39d898b609515260ad08f0e766a6012102fb721b92025e775b1b84774e65d568d24645cb633275f5c26f5c3101b214a8fb", 'hex');
      RVNBOX.Script.decode(scriptSigBuffer);
      // [
      //   ,
      //
      // ]

      // decode P2PKH scriptPubKey buffer
      let scriptPubKeyBuffer = Buffer.from("76a91424e9c07804d0ee7e5bda934e0a3ae8710fc007dd88ac", 'hex');
      RVNBOX.Script.decode(scriptPubKeyBuffer);
      // [ 118,
      // 169,
      // ,
      // 136,
      // 172 ]

### `toASM`

Script buffer to ASM.

#### Arguments

1.  buffer `Buffer`

#### Result

asm `String`

#### Examples

      // P2PKH scriptSig
      let scriptSigBuffer = Buffer.from('483045022100877e2f9c28421f0a850cc8ff66ba1d0f6c8dbe9e63e199c2c2600c9c15bf9d4402204d35b13d3cc202aa25722b2b1791442ebc5c39d898b609515260ad08f0e766a6012102fb721b92025e775b1b84774e65d568d24645cb633275f5c26f5c3101b214a8fb', 'hex');
      RVNBOX.Script.toASM(scriptSigBuffer);
      // 3045022100877e2f9c28421f0a850cc8ff66ba1d0f6c8dbe9e63e199c2c2600c9c15bf9d4402204d35b13d3cc202aa25722b2b1791442ebc5c39d898b609515260ad08f0e766a601 02fb721b92025e775b1b84774e65d568d24645cb633275f5c26f5c3101b214a8fb

      // P2PKH scriptPubKey
      let scriptBuffer = Buffer.from("76a914bee4182d9fbc8931a728410a0cd3e0f340f2995a88ac", 'hex');
      RVNBOX.Script.toASM(scriptBuffer);
      // OP_DUP OP_HASH160 bee4182d9fbc8931a728410a0cd3e0f340f2995a OP_EQUALVERIFY OP_CHECKSIG

### `fromASM`

Script ASM to buffer

#### Arguments

1.  asm `String`

#### Result

buffer `Buffer`

#### Examples

      // P2PKH scriptSig
      let scriptSigASM = "3045022100877e2f9c28421f0a850cc8ff66ba1d0f6c8dbe9e63e199c2c2600c9c15bf9d4402204d35b13d3cc202aa25722b2b1791442ebc5c39d898b609515260ad08f0e766a601 02fb721b92025e775b1b84774e65d568d24645cb633275f5c26f5c3101b214a8fb";
      RVNBOX.Script.fromASM(scriptSigASM);
      // <Buffer 48 30 45 02 21 00 87 7e 2f 9c 28 42 1f 0a 85 0c c8 ff 66 ba 1d 0f 6c 8d be 9e 63 e1 99 c2 c2 60 0c 9c 15 bf 9d 44 02 20 4d 35 b1 3d 3c c2 02 aa 25 72 ... >

      // P2PKH scriptPubKey
      let scriptPubKeyASM = "OP_DUP OP_HASH160 bee4182d9fbc8931a728410a0cd3e0f340f2995a OP_EQUALVERIFY OP_CHECKSIG";
      RVNBOX.Script.fromASM(scriptPubKeyASM);
      // <Buffer 76 a9 14 be e4 18 2d 9f bc 89 31 a7 28 41 0a 0c d3 e0 f3 40 f2 99 5a 88 ac>

### `encodeNullDataOutput`

nulldata output template: `` OP_RETURN `data` ``

#### Arguments

1.  data `Buffer`

#### Result

buffer `Buffer`

#### Examples

      let data = "RVNForEveryone";
      let buf = RVNBOX.Script.nullData.output.encode(Buffer.from(data, 'ascii'));
      //
      RVNBOX.Script.toASM(buf);
      // OP_RETURN 424348466f7245766572796f6e65

      let data = "Bruce Fenton";
      let buf = RVNBOX.Script.nullData.output.encode(Buffer.from(data, 'ascii'));
      //
      RVNBOX.Script.toASM(buf);
      // OP_RETURN 5361746f736869204e616b616d6f746

### `decodeNullDataOutput`

decode nulldata output

#### Arguments

1.  output `Buffer`

#### Result

buffer `Buffer`

#### Examples

      let hex = '6a0e424348466f7245766572796f6e65';
      RVNBOX.Script.nullData.output.decode(Buffer.from(hex, 'hex')).toString('ascii');
      // RNVForEveryone

      let hex = '6a105361746f736869204e616b616d6f746f';
      RVNBOX.Script.nullData.output.decode(Buffer.from(hex, 'hex')).toString('ascii');
      // Bruce Fenton

### `checkNullDataOutput`

check nulldata output format

#### Arguments

1.  output `Buffer`

#### Result

valid `Boolean`

#### Examples

      let data = "RVNForEveryone";
      let buf = RVNBOX.Script.nullData.output.encode(Buffer.from(data, 'ascii'));
      RVNBOX.Script.nullData.output.check(buf);
      // true

      let data = "Bruce Fenton";
      let buf = RVNBOX.Script.nullData.output.encode(Buffer.from(data, 'ascii'));
      RVNBOX.Script.nullData.output.check(buf);
      // true

### `encodeP2PKInput`

p2pk input template: `` `signature` ``

#### Arguments

1.  signature `Buffer`

#### Result

buffer `Buffer`

#### Examples

      let signature = '304402207515cf147d201f411092e6be5a64a6006f9308fad7b2a8fdaab22cd86ce764c202200974b8aca7bf51dbf54150d3884e1ae04f675637b926ec33bf75939446f6ca2801';
      let buf = RVNBOX.Script.pubKey.input.encode(Buffer.from(signature, 'hex'));
      //
      RVNBOX.Script.toASM(buf);
      // 304402207515cf147d201f411092e6be5a64a6006f9308fad7b2a8fdaab22cd86ce764c202200974b8aca7bf51dbf54150d3884e1ae04f675637b926ec33bf75939446f6ca2801

### `decodeP2PKInput`

decode p2pk input

#### Arguments

1.  input `Buffer`

#### Result

buffer `Buffer`

#### Examples

      let hex = '47304402207515cf147d201f411092e6be5a64a6006f9308fad7b2a8fdaab22cd86ce764c202200974b8aca7bf51dbf54150d3884e1ae04f675637b926ec33bf75939446f6ca2801';
      RVNBOX.Script.pubKey.input.decode(Buffer.from(hex, 'hex'));
      //

### `checkP2PKInput`

check p2pk input format

#### Arguments

1.  input `Buffer`

#### Result

valid `Boolean`

#### Examples

      let signature = '304402207515cf147d201f411092e6be5a64a6006f9308fad7b2a8fdaab22cd86ce764c202200974b8aca7bf51dbf54150d3884e1ae04f675637b926ec33bf75939446f6ca2801';
      let input = RVNBOX.Script.pubKey.input.encode(Buffer.from(signature, 'hex'));
      RVNBOX.Script.pubKey.input.check(input);
      // true

### `encodeP2PKOutput`

p2pk output template: `` `pubKey` OP_CHECKSIG ``

#### Arguments

1.  pubKey `Buffer`

#### Result

buffer `Buffer`

#### Examples

      let pubKey = '02d305772e0873fba6c1c7ff353ce374233316eb5820acd7ff3d7d9b82d514126b';
      let buf = RVNBOX.Script.pubKey.output.encode(Buffer.from(pubKey, 'hex'));
      //
      RVNBOX.Script.toASM(buf)
      // 02d305772e0873fba6c1c7ff353ce374233316eb5820acd7ff3d7d9b82d514126b OP_CHECKSIG

### `decodeP2PKOutput`

decode p2pk output

#### Arguments

1.  pubKey `Buffer`

#### Result

buffer `Buffer`

#### Examples

      let hex = '2102d305772e0873fba6c1c7ff353ce374233316eb5820acd7ff3d7d9b82d514126bac';
      RVNBOX.Script.pubKey.output.decode(Buffer.from(hex, 'hex'));
      //

### `checkP2PKOutput`

check P2PK output format

#### Arguments

1.  output `Buffer`

#### Result

valid `Boolean`

#### Examples

      // check p2pk output
      let pubKey = '02d305772e0873fba6c1c7ff353ce374233316eb5820acd7ff3d7d9b82d514126b';
      let buf = RVNBOX.Script.pubKey.output.encode(Buffer.from(pubKey, 'hex'));
      RVNBOX.Script.pubKey.output.check(buf);
      // true

### `encodeP2PKHInput`

p2pkh input template: `` `signature` `pubKey` ``

#### Arguments

1.  signature `Buffer`
2.  pubKey `Buffer`

#### Result

buffer `Buffer`

#### Examples

      let signature = '304402207515cf147d201f411092e6be5a64a6006f9308fad7b2a8fdaab22cd86ce764c202200974b8aca7bf51dbf54150d3884e1ae04f675637b926ec33bf75939446f6ca2801';
      let pubKey = '02d9bb8da1de26d390b6f3dcb4e589857730536b646995fa948a8319ede2ca1c15';
      let buf = RVNBOX.Script.pubKeyHash.input.encode(Buffer.from(signature, 'hex'), Buffer.from(pubKey, 'hex'));
      //
      RVNBOX.Script.toASM(buf);
      // 304402207515cf147d201f411092e6be5a64a6006f9308fad7b2a8fdaab22cd86ce764c202200974b8aca7bf51dbf54150d3884e1ae04f675637b926ec33bf75939446f6ca2801 02d9bb8da1de26d390b6f3dcb4e589857730536b646995fa948a8319ede2ca1c15

### `decodeP2PKHInput`

decode p2pkh input

#### Arguments

1.  signature `Buffer`

#### Result

buffer `Buffer`

#### Examples

      let hex = '47304402207515cf147d201f411092e6be5a64a6006f9308fad7b2a8fdaab22cd86ce764c202200974b8aca7bf51dbf54150d3884e1ae04f675637b926ec33bf75939446f6ca28012102d9bb8da1de26d390b6f3dcb4e589857730536b646995fa948a8319ede2ca1c15';
      RVNBOX.Script.pubKeyHash.input.decode(Buffer.from(hex, 'hex'));
      // { signature: ,
      // pubKey:  }

### `checkP2PKHInput`

check P2PKH input format

#### Arguments

1.  input `Buffer`

#### Result

valid `Boolean`

#### Examples

      // check p2pkh input
      let signature = '304402207515cf147d201f411092e6be5a64a6006f9308fad7b2a8fdaab22cd86ce764c202200974b8aca7bf51dbf54150d3884e1ae04f675637b926ec33bf75939446f6ca2801';
      let pubKey = '02d9bb8da1de26d390b6f3dcb4e589857730536b646995fa948a8319ede2ca1c15';
      let buf = RVNBOX.Script.pubKeyHash.input.encode(Buffer.from(signature, 'hex'), Buffer.from(pubKey, 'hex'));
      RVNBOX.Script.pubKeyHash.input.check(buf);
      // true

### `encodeP2PKHOutput`

p2pkh output template: `` OP_DUP OP_HASH160 `pubKeyHash` OP_EQUALVERIFY OP_CHECKSIG ``

#### Arguments

1.  signature `Buffer`
2.  pubKey `Buffer`

#### Result

buffer `Buffer`

#### Examples

      let node = RVNBOX.HDNode.fromXPriv('xprv9xoxVbZ7L8jmvKx7e1hgd7muo8H35ysTx1LCKFey5nVHUkHSPBxpzBzt2HVK16hu4m6oN5vfaCWSZQvqtDhfJTCY3t9ocp7H7zcTZ2fVRwL');
      let identifier = RVNBOX.HDNode.toIdentifier(node);
      let buf = RVNBOX.Script.pubKeyHash.output.encode(identifier);
      //
      RVNBOX.Script.toASM(buf)
      // OP_DUP OP_HASH160 6ee7ded4f9d0deb6f4a63d68df5ccc4e41ad8967 OP_EQUALVERIFY OP_CHECKSIG

### `decodeP2PKHOutput`

decode p2pkh output

#### Arguments

1.  output `Buffer`

#### Result

buffer `Buffer`

#### Examples

      let hex = '76a9146ee7ded4f9d0deb6f4a63d68df5ccc4e41ad896788ac';
      RVNBOX.Script.pubKeyHash.output.decode(Buffer.from(hex, 'hex'));
      //

### `checkP2PKHOutput`

check P2PKH output format

#### Arguments

1.  output `Buffer`

#### Result

valid `Boolean`

#### Examples

      // check p2pkh output
      let node = RVNBOX.HDNode.fromXPriv('xprv9xoxVbZ7L8jmvKx7e1hgd7muo8H35ysTx1LCKFey5nVHUkHSPBxpzBzt2HVK16hu4m6oN5vfaCWSZQvqtDhfJTCY3t9ocp7H7zcTZ2fVRwL');
      let identifier = RVNBOX.HDNode.toIdentifier(node);
      let buf = RVNBOX.Script.pubKeyHash.output.encode(identifier);
      RVNBOX.Script.pubKeyHash.output.check(buf);
      // true

### `encodeP2MSInput`

p2ms Input template: `OP_0 [signatures ...]`

#### Arguments

1.  signatures `Array`

#### Result

buffer `Buffer`

#### Examples

      let signatures = [
      "304402207515cf147d201f411092e6be5a64a6006f9308fad7b2a8fdaab22cd86ce764c202200974b8aca7bf51dbf54150d3884e1ae04f675637b926ec33bf75939446f6ca2801",
      "3045022100ef253c1faa39e65115872519e5f0a33bbecf430c0f35cf562beabbad4da24d8d02201742be8ee49812a73adea3007c9641ce6725c32cd44ddb8e3a3af460015d140501"
      ];
      let sigs = signatures.map((signature) => {
      return signature ? Buffer.from(signature, 'hex') : RVNBOX.Script.opcodes.OP_0
      })
      let buf = RVNBOX.Script.multisig.input.encode(sigs);
      //
      RVNBOX.Script.toASM(buf);
      // OP_0 304402207515cf147d201f411092e6be5a64a6006f9308fad7b2a8fdaab22cd86ce764c202200974b8aca7bf51dbf54150d3884e1ae04f675637b926ec33bf75939446f6ca2801 3045022100ef253c1faa39e65115872519e5f0a33bbecf430c0f35cf562beabbad4da24d8d02201742be8ee49812a73adea3007c9641ce6725c32cd44ddb8e3a3af460015d14050

### `decodeP2MSInput`

decode p2ms input

#### Arguments

1.  input `Buffer`

#### Result

buffer `Buffer`

#### Examples

      let hex = '0047304402207515cf147d201f411092e6be5a64a6006f9308fad7b2a8fdaab22cd86ce764c202200974b8aca7bf51dbf54150d3884e1ae04f675637b926ec33bf75939446f6ca2801483045022100ef253c1faa39e65115872519e5f0a33bbecf430c0f35cf562beabbad4da24d8d02201742be8ee49812a73adea3007c9641ce6725c32cd44ddb8e3a3af460015d140501';
      RVNBOX.Script.multisig.input.decode(Buffer.from(hex, 'hex'));
      // [ ,
      //  ]

### `checkP2MSInput`

check P2MS input format

#### Arguments

1.  input `Buffer`

#### Result

valid `Boolean`

#### Examples

      let signatures = [
      "304402207515cf147d201f411092e6be5a64a6006f9308fad7b2a8fdaab22cd86ce764c202200974b8aca7bf51dbf54150d3884e1ae04f675637b926ec33bf75939446f6ca2801",
      "3045022100ef253c1faa39e65115872519e5f0a33bbecf430c0f35cf562beabbad4da24d8d02201742be8ee49812a73adea3007c9641ce6725c32cd44ddb8e3a3af460015d140501"
      ];
      let sigs = signatures.map((signature) => {
      return signature ? Buffer.from(signature, 'hex') : RVNBOX.Script.opcodes.OP_0
      })
      let buf = RVNBOX.Script.multisig.input.encode(sigs);
      RVNBOX.Script.multisig.input.check(buf);
      // true

### `encodeP2MSOutput`

p2ms Output template: `m [pubKeys ...] n OP_CHECKMULTISIG`

#### Arguments

1.  m `Number`
2.  pubKeys `Array`

#### Result

buffer `Buffer`

#### Examples

      let arr = [
      "02359c6e3f04cefbf089cf1d6670dc47c3fb4df68e2bad1fa5a369f9ce4b42bbd1",
      "0395a9d84d47d524548f79f435758c01faec5da2b7e551d3b8c995b7e06326ae4a"
      ];
      let pubKeys = arr.map((p) => { return Buffer.from(p, 'hex') })
      let m = pubKeys.length
      let buf = RVNBOX.Script.multisig.output.encode(m, pubKeys);
      //
      RVNBOX.Script.toASM(buf);
      // OP_2 02359c6e3f04cefbf089cf1d6670dc47c3fb4df68e2bad1fa5a369f9ce4b42bbd1 0395a9d84d47d524548f79f435758c01faec5da2b7e551d3b8c995b7e06326ae4a OP_2 OP_CHECKMULTISIG

### `decodeP2MSOutput`

decode p2ms output

#### Arguments

1.  output `Buffer`

#### Result

buffer `Buffer`

#### Examples

      let hex = '522102359c6e3f04cefbf089cf1d6670dc47c3fb4df68e2bad1fa5a369f9ce4b42bbd1210395a9d84d47d524548f79f435758c01faec5da2b7e551d3b8c995b7e06326ae4a52ae';
      RVNBOX.Script.multisig.output.decode(Buffer.from(hex, 'hex'));
      // { m: 2,
      // pubKeys:
      //  [ ,
      //     ] }

### `checkP2MSOutput`

check P2MS output format

#### Arguments

1.  input `Buffer`

#### Result

valid `Boolean`

#### Examples

      let arr = [
      "02359c6e3f04cefbf089cf1d6670dc47c3fb4df68e2bad1fa5a369f9ce4b42bbd1",
      "0395a9d84d47d524548f79f435758c01faec5da2b7e551d3b8c995b7e06326ae4a"
      ];
      let pubKeys = arr.map((p) => { return Buffer.from(p, 'hex') })
      let m = pubKeys.length
      let buf = RVNBOX.Script.multisig.output.encode(m, pubKeys);
      RVNBOX.Script.multisig.output.check(buf);
      // true

### `encodeP2SHInput`

p2sh Input template: `` `scriptSig` `serialized scriptPubKey script` ``

#### Arguments

1.  redeemScriptSig `Buffer`
2.  redeemScript `Buffer`

#### Result

buffer `Buffer`

#### Examples

      let redeemScriptSig = RVNBOX.Script.fromASM("OP_0 304402207515cf147d201f411092e6be5a64a6006f9308fad7b2a8fdaab22cd86ce764c202200974b8aca7bf51dbf54150d3884e1ae04f675637b926ec33bf75939446f6ca2801 3045022100ef253c1faa39e65115872519e5f0a33bbecf430c0f35cf562beabbad4da24d8d02201742be8ee49812a73adea3007c9641ce6725c32cd44ddb8e3a3af460015d140501");
      let redeemScript = RVNBOX.Script.fromASM("OP_2 02359c6e3f04cefbf089cf1d6670dc47c3fb4df68e2bad1fa5a369f9ce4b42bbd1 0395a9d84d47d524548f79f435758c01faec5da2b7e551d3b8c995b7e06326ae4a OP_2 OP_CHECKMULTISIG");
      let buf = RVNBOX.Script.scriptHash.input.encode(redeemScriptSig, redeemScript);
      //
      RVNBOX.Script.toASM(buf)
      // OP_0 304402207515cf147d201f411092e6be5a64a6006f9308fad7b2a8fdaab22cd86ce764c202200974b8aca7bf51dbf54150d3884e1ae04f675637b926ec33bf75939446f6ca2801 3045022100ef253c1faa39e65115872519e5f0a33bbecf430c0f35cf562beabbad4da24d8d02201742be8ee49812a73adea3007c9641ce6725c32cd44ddb8e3a3af460015d140501 522102359c6e3f04cefbf089cf1d6670dc47c3fb4df68e2bad1fa5a369f9ce4b42bbd1210395a9d84d47d524548f79f435758c01faec5da2b7e551d3b8c995b7e06326ae4a52ae

### `decodeP2SHInput`

decode p2sh input

#### Arguments

1.  input `Buffer`

#### Result

buffer `Buffer`

#### Examples

      let hex = '0047304402207515cf147d201f411092e6be5a64a6006f9308fad7b2a8fdaab22cd86ce764c202200974b8aca7bf51dbf54150d3884e1ae04f675637b926ec33bf75939446f6ca2801483045022100ef253c1faa39e65115872519e5f0a33bbecf430c0f35cf562beabbad4da24d8d02201742be8ee49812a73adea3007c9641ce6725c32cd44ddb8e3a3af460015d14050147522102359c6e3f04cefbf089cf1d6670dc47c3fb4df68e2bad1fa5a369f9ce4b42bbd1210395a9d84d47d524548f79f435758c01faec5da2b7e551d3b8c995b7e06326ae4a52ae';
      RVNBOX.Script.scriptHash.input.decode(Buffer.from(hex, 'hex'));
      // { redeemScript: ,
      // redeemScriptSig:  }

### `checkP2SHInput`

check P2SH input format

#### Arguments

1.  input `Buffer`

#### Result

valid `Boolean`

#### Examples

      let redeemScriptSig = RVNBOX.Script.fromASM("OP_0 304402207515cf147d201f411092e6be5a64a6006f9308fad7b2a8fdaab22cd86ce764c202200974b8aca7bf51dbf54150d3884e1ae04f675637b926ec33bf75939446f6ca2801 3045022100ef253c1faa39e65115872519e5f0a33bbecf430c0f35cf562beabbad4da24d8d02201742be8ee49812a73adea3007c9641ce6725c32cd44ddb8e3a3af460015d140501");
      let redeemScript = RVNBOX.Script.fromASM("OP_2 02359c6e3f04cefbf089cf1d6670dc47c3fb4df68e2bad1fa5a369f9ce4b42bbd1 0395a9d84d47d524548f79f435758c01faec5da2b7e551d3b8c995b7e06326ae4a OP_2 OP_CHECKMULTISIG");
      let buf = RVNBOX.Script.scriptHash.input.encode(redeemScriptSig, redeemScript);
      RVNBOX.Script.scriptHash.input.check(buf);
      // true

### `encodeP2SHOutput`

p2sh Output template: `` OP_HASH160 `scriptHash` OP_EQUAL ``

#### Arguments

1.  scriptHash `Buffer`

#### Result

buffer `Buffer`

#### Examples

      let redeemScript = RVNBOX.Script.fromASM("OP_DUP OP_HASH160 aa4d7985c57e011a8b3dd8e0e5a73aaef41629c5 OP_EQUALVERIFY OP_CHECKSIG");
      let scriptHash = RVNBOX.Crypto.hash160(redeemScript);
      let buf = RVNBOX.Script.scriptHash.output.encode(scriptHash);
      //
      RVNBOX.Script.toASM(buf)
      // OP_HASH160 1b61ebed0c2a16c699a99c3d5ef4d08de7fb1cb8 OP_EQUAL

### `decodeP2SHOutput`

decode p2sh output

#### Arguments

1.  output `Buffer`

#### Result

buffer `Buffer`

#### Examples

      let hex = 'a9141b61ebed0c2a16c699a99c3d5ef4d08de7fb1cb887';
      RVNBOX.Script.scriptHash.output.decode(Buffer.from(hex, 'hex'));
      //

### `checkP2SHOutput`

check P2SH output format

#### Arguments

1.  output `Buffer`

#### Result

valid `Boolean`

#### Examples

      let redeemScript = RVNBOX.Script.fromASM("OP_DUP OP_HASH160 aa4d7985c57e011a8b3dd8e0e5a73aaef41629c5 OP_EQUALVERIFY OP_CHECKSIG");
      let scriptHash = RVNBOX.Crypto.hash160(redeemScript);
      let buf = RVNBOX.Script.scriptHash.output.encode(scriptHash);
      RVNBOX.Script.scriptHash.output.check(buf);
      // true

### `classifyInput`

Classify transaction input

#### Arguments

1.  input `Buffer`

#### Result

type `String`

#### Examples

      let pubkeyInput = "3045022100ba2c3b717e023966cb16df65ca83f77029e2a5b80c47c47b6956474ac9ff281302201d48ee3292439e284a6654a0e79ac2b8f7fff5c6b0d715260aa296501a239c6441";
      RVNBOX.Script.classifyInput(RVNBOX.Script.fromASM(pubkeyInput));
      // pubkey

      let pubkeyhashInput = "30440220280d4a9954c5afe24089bdd545466bd7a8caad8b295e30de9d3cb5e56fccf64e022036663b2c53b5fac674b4b935b53e2a4ea88dfc71c9b879870976d82887542ab441 02969479fa9bea3082697dce683ac05b13ae63016b41d5ca1a450ad40f6c543751";
      RVNBOX.Script.classifyInput(RVNBOX.Script.fromASM(pubkeyhashInput));
      // pubkeyhash

      let multisigInput = "OP_0 3045022100fe324541215798b2df68cbd44039615e23c506d4ec1a05572064392a98196b82022068c849fa6699206da2fc6d7848efc1d3804a5816d6293615fe34c1a7f34e1c2f01 3044022001ab168e80b863fdec694350b587339bb72a37108ac3c989849251444d13ebba02201811272023e3c1038478eb972a82d3ad431bfc2408e88e4da990f1a7ecbb263901 3045022100aaeb7204c17eee2f2c4ff1c9f8b39b79e75e7fbf33e92cc67ac51be8f15b75f90220659eee314a4943a6384d2b154fa5821ef7a084814d7ee2c6f9f7f0ffb53be34b01";
      RVNBOX.Script.classifyInput(RVNBOX.Script.fromASM(multisigInput));
      // multisig

      let scripthashInput = "OP_0 304402207515cf147d201f411092e6be5a64a6006f9308fad7b2a8fdaab22cd86ce764c202200974b8aca7bf51dbf54150d3884e1ae04f675637b926ec33bf75939446f6ca2801 3045022100ef253c1faa39e65115872519e5f0a33bbecf430c0f35cf562beabbad4da24d8d02201742be8ee49812a73adea3007c9641ce6725c32cd44ddb8e3a3af460015d140501 522102359c6e3f04cefbf089cf1d6670dc47c3fb4df68e2bad1fa5a369f9ce4b42bbd1210395a9d84d47d524548f79f435758c01faec5da2b7e551d3b8c995b7e06326ae4a52ae";
      RVNBOX.Script.classifyInput(RVNBOX.Script.fromASM(scripthashInput));
      // scripthash

### `classifyOutput`

Classify transaction output

#### Arguments

1.  output `Buffer`

#### Result

type `String`

#### Examples

      let nullDataOutput = "OP_RETURN 424348466f7245766572796f6e65";
      RVNBOX.Script.classifyOutput(RVNBOX.Script.fromASM(nullDataOutput));
      // nulldata

      let pubkeyOutput = "02359c6e3f04cefbf089cf1d6670dc47c3fb4df68e2bad1fa5a369f9ce4b42bbd1 OP_CHECKSIG";
      RVNBOX.Script.classifyOutput(RVNBOX.Script.fromASM(pubkeyOutput));
      // pubkey

      let pubkeyhashOutput = "OP_DUP OP_HASH160 aa4d7985c57e011a8b3dd8e0e5a73aaef41629c5 OP_EQUALVERIFY OP_CHECKSIG";
      RVNBOX.Script.classifyOutput(RVNBOX.Script.fromASM(pubkeyhashOutput));
      // pubkeyhash

      let multisigOutput = "OP_2 02359c6e3f04cefbf089cf1d6670dc47c3fb4df68e2bad1fa5a369f9ce4b42bbd1 0395a9d84d47d524548f79f435758c01faec5da2b7e551d3b8c995b7e06326ae4a OP_2 OP_CHECKMULTISIG";
      RVNBOX.Script.classifyOutput(RVNBOX.Script.fromASM(multisigOutput));
      // multisig

      let scripthashOutput = "OP_HASH160 722ff0bc2c3f47b35c20df646c395594da24e90e OP_EQUAL";
      RVNBOX.Script.classifyOutput(RVNBOX.Script.fromASM(scripthashOutput));
      // scripthash
