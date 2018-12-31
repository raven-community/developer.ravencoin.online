---
title: Address
icon: qrcode
ordinal: 3
---

### `toLegacyAddress`

Converting address Types to legacy address format

#### Arguments

1.  address `String` address to be converted

#### Result

legacyAddress `String` legacy base 58 check encoded address

#### Examples

      // mainnet w/ prefix
      RVNBOX.Address.toLegacyAddress('qzm47qz5ue99y9yl4aca7jnz7dwgdenl85jkfx3znl')
      // 1HiaTupadqQN66Tvgt7QSE5Wg13BUy25eN

      // mainnet w/ no prefix
      RVNBOX.Address.toLegacyAddress('qzm47qz5ue99y9yl4aca7jnz7dwgdenl85jkfx3znl')
      // 1HiaTupadqQN66Tvgt7QSE5Wg13BUy25eN

      // testnet w/ prefix
      RVNBOX.Address.toLegacyAddress('rvntest:qph2v4mkxjgdqgmlyjx6njmey0ftrxlnggt9t0a6zy')
      // mqc1tmwY2368LLGktnePzEyPAsgADxbksi

      // testnet w/ no prefix
      RVNBOX.Address.toLegacyAddress('qph2v4mkxjgdqgmlyjx6njmey0ftrxlnggt9t0a6zy')
      // mqc1tmwY2368LLGktnePzEyPAsgADxbksi

### `isLegacyAddress`

Detect if legacy base58check encoded address

#### Arguments

1.  address `String`: address to determine

#### Result

isLegacyAddress `Boolean`: true/false if legacy address

#### Examples

      // legacy
      RVNBOX.Address.isLegacyAddress('1HiaTupadqQN66Tvgt7QSE5Wg13BUy25eN')
      // true

      // legacy testnet
      RVNBOX.Address.isLegacyAddress('mqc1tmwY2368LLGktnePzEyPAsgADxbksi')
      // true

### `isMainnetAddress`

Detect if mainnet address

#### Arguments

1.  address `String`: address to determine

#### Result

isMainnetAddress `Boolean`: true/false if mainnet address

#### Examples

      // mainnet legacy
      RVNBOX.Address.isMainnetAddress('14krEkSaKoTkbFT9iUCfUYARo4EXA8co6M')
      // true

      // testnet legacy
      RVNBOX.Address.isMainnetAddress('mqc1tmwY2368LLGktnePzEyPAsgADxbksi')
      // false

### `isTestnetAddress`

Detect if testnet address

#### Arguments

1.  addresss `String`: address to determine

#### Result

isTestnetAddresss `Boolean`: true/false if is testnet address

#### Examples

      // legacy mainnet
      RVNBOX.Address.isTestnetAddress('14krEkSaKoTkbFT9iUCfUYARo4EXA8co6M')
      // false

      // testnet legacy
      RVNBOX.Address.isTestnetAddress('mqc1tmwY2368LLGktnePzEyPAsgADxbksi')
      // true

### `isP2PKHAddress`

Detect if p2pkh address

#### Arguments

1.  address `String` address to determine

#### Result

isP2PKHAddress `Boolean` true/false if is p2pkh address

#### Examples

      // legacy
      RVNBOX.Address.isP2PKHAddress('14krEkSaKoTkbFT9iUCfUYARo4EXA8co6M')
      // true

      // legacy testnet
      RVNBOX.Address.isP2PKHAddress('mqc1tmwY2368LLGktnePzEyPAsgADxbksi')
      // true

      // legacy testnet
      RVNBOX.Address.isP2PKHAddress('mqc1tmwY2368LLGktnePzEyPAsgADxbksi')
      // true

### `isP2SHAddress`

Detect if p2sh address

#### arguments

1.  address `String` address to determine

#### Result

isP2SHAddress `Boolean` true/false if is p2sh address

#### Examples

      // legacy
      RVNBOX.Address.isP2SHAddress('1NoYQso5UF6XqC4NbjKAp2EnjJ59yLNn74')
      // false

      // legacy testnet
      RVNBOX.Address.isP2SHAddress('mqc1tmwY2368LLGktnePzEyPAsgADxbksi')
      // false

### `detectAddressFormat`

Detect address format

#### arguments

1.  address `String` address to determine format

#### Result

addressFormat `String` address format

#### Examples

      // legacy
      RVNBOX.Address.detectAddressFormat('1NoYQso5UF6XqC4NbjKAp2EnjJ59yLNn74')
      // legacy

      // legacy testnet
      RVNBOX.Address.detectAddressFormat('mqc1tmwY2368LLGktnePzEyPAsgADxbksi')
      // legacy

### `detectAddressNetwork`

Detect address network

#### arguments

1.  address `String` address to determine network

#### Result

addressNetwork `String` address network

#### Examples

      // legacy
      RVNBOX.Address.detectAddressNetwork('1NoYQso5UF6XqC4NbjKAp2EnjJ59yLNn74')
      // mainnet

      // legacy testnet
      RVNBOX.Address.detectAddressNetwork('mqc1tmwY2368LLGktnePzEyPAsgADxbksi')
      // testnet

### `detectAddressType`

Detect address network

#### arguments

1.  address `String` address to determine network

#### Result

addressNetwork `String` address network

#### Examples

      // legacy
      RVNBOX.Address.detectAddressType('1NoYQso5UF6XqC4NbjKAp2EnjJ59yLNn74');
      // p2pkh

      // legacy testnet
      RVNBOX.Address.detectAddressType('mqc1tmwY2368LLGktnePzEyPAsgADxbksi');
      // p2pkh

### `fromXPub`

Generates an address for an extended public key (xpub)

#### Arguments

1.  xpub `String`: extended public key to be used
2.  path `String` `optional`: derivation path of external change address. Default is `0/0`

#### Result

changeAddress `String`: encoded change address

#### Examples

      // generate 5 external change addresses for xpub6DTNmB7gWa8RtQAfmy8wSDikM5mky4fhsnqQd9AqoCaLcekqNgRZW5JCSXwXkLDkABHTD1qx7kqrbGzT6xBGfAvCJSj2rwvKWP8eZBR2EVA
      let xpub = 'xpub6DTNmB7gWa8RtQAfmy8wSDikM5mky4fhsnqQd9AqoCaLcekqNgRZW5JCSXwXkLDkABHTD1qx7kqrbGzT6xBGfAvCJSj2rwvKWP8eZBR2EVA';
      for(let i = 0; i <= 4; i++) {
        RVNBOX.Address.fromXPub(xpub, "0/" + i)
      }
      // qptnmya5wkly7xf97wm5ak23yqdsz3l2cyj7k9vyyh
      // qrr2suh9yjsrkl2qp3p967uhfg6u0r6xxsn9h5vuvr
      // qpkfg4kck99wksyss6nvaqtafeahfnyrpsj0ed372t
      // qppgmuuwy07g0x39sx2z0x2u8e34tvfdxvy0c2jvx7
      // qryj8x4s7vfsc864jm0xaak9qfe8qgk245y9ska57l

      // generate 5 external change addresses for xpub6DLXtM9JjvtUTm6TngeSXZdeKfFqA1sLYoFQMTTXYYbwDw55eTy7uhconrzw8mW1zzmpMBYpQLpBPzRdSn9Hxrse5TTnpdtcoeXahkC6bPd
      let xpub = 'xpub6DLXtM9JjvtUTm6TngeSXZdeKfFqA1sLYoFQMTTXYYbwDw55eTy7uhconrzw8mW1zzmpMBYpQLpBPzRdSn9Hxrse5TTnpdtcoeXahkC6bPd';
      for(let i = 0; i <= 4; i++) {
        RVNBOX.Address.fromXPub(xpub, "0/" + i)
      }
      // qpm05nr0fmxmyhlz0qermkad0zvsfsqu6ckv6e5tzr
      // qre28yd5msvsenn9qj5fwm3k3u00dty4ac739zhw2k
      // qp0utfskvcnsy2whkurk25x247jcdmexqyekzury66
      // qqzjwx6zdvhkwalzvnaprwk73me9szqvgspgu6shst
      // qzpcg6atgg36vrkwvklw9325nqzdcxd8c5dl5l6k79

      // generate 5 external change addresses for xpub6DLXtM9JjvtUV1i6tBdQ6RCwYHoUjzK2GL1BmXf4TW8QbFGWueMJrwRUsZntEUBfpqJACiid1PEPNbDVTRZxyGKp5k8KsHVg27nDR1Makdh
      let xpub = 'xpub6DLXtM9JjvtUV1i6tBdQ6RCwYHoUjzK2GL1BmXf4TW8QbFGWueMJrwRUsZntEUBfpqJACiid1PEPNbDVTRZxyGKp5k8KsHVg27nDR1Makdh';
      for(let i = 0; i <= 4; i++) {
        RVNBOX.Address.fromXPub(xpub, "0/" + i)
      }
      // qrykz97x24tgz9nq29yyqcc98nqj8k2n45jg57manf
      // qp8e7rrajx3wscqr6zfu3mvnlkmt0s4dhqldpqscym
      // qrw6fhr6nl5lh9srh9a9sr890r3zzsgt7sqh7tkyve
      // qqj9ctz9sex3xjapgm8hv5dkpfmf7aalrs2z2jprm2
      // qzytws9yvyqgsx3smfyy3yaq5xw9jt0xsy7kpnqpth

      // generate 5 external change addresses for xpub6DLXtM9JjvtUa9tPGP5kYXnGGeo3dnBuhUZP7QmE97hKxM1EizDgFZgVe8M5Nv49z5ytpAnwwNcc16wChnecpj3KyFPkufbi9uZaj5ALCGm
      let xpub = 'xpub6DLXtM9JjvtUa9tPGP5kYXnGGeo3dnBuhUZP7QmE97hKxM1EizDgFZgVe8M5Nv49z5ytpAnwwNcc16wChnecpj3KyFPkufbi9uZaj5ALCGm';
      for(let i = 0; i <= 4; i++) {
        RVNBOX.Address.fromXPub(xpub, "0/" + i)
      }
      // qp9e7kd6pgy7pek2vemfspm6vc544xzm2yjfezst3q
      // qqt9g8ggmd5kxccvuye0nv7enj6syqqxyymnrhgkep
      // qqr8qf8qj7yxgtaydkt5xp0lw4fnu56jmy7q5k9sat
      // qzaf69rhsnzfjtg0ydw2qlqeyhpnsfzz4ghr5jkrzy
      // qrwjhc0dujvjtrl0e0zc8tkhwxfvljvamc6e0kcj3w

      // generate 5 external change addresses for xpub6DLXtM9JjvtUkiaWLnfiSHjW51vspUW7GDmkML17w2qoEeGztYYSmotgXJpwmoNCc6QbdCXWySEWki7jURV46hmN6MXwem1aNo3gxhkjJPj
      let xpub = 'xpub6DLXtM9JjvtUkiaWLnfiSHjW51vspUW7GDmkML17w2qoEeGztYYSmotgXJpwmoNCc6QbdCXWySEWki7jURV46hmN6MXwem1aNo3gxhkjJPj';
      for(let i = 0; i <= 4; i++) {
        RVNBOX.Address.fromXPub(xpub, "0/" + i)
      }
      // qzrfwca03gzgwgxsjcxfphuckztc9squ9vmws99sr7
      // qrr0ykn2xwy80hl0p7vnm44l5sc43x5245nlrfc74c
      // qr3zlplv2w0t3s92twldjk432f45agls0qj35tyqtc
      // qqxf90phz7ysrj53tymq6qvmquk0kd04wvjf6s83nv
      // qrygumzwu7anzppyzcraa2tal3vlzc7p3smyh5cdth

### `fromOutputScript`

Detect an addess from an OutputScript.

#### Arguments

1.  scriptPubKey`Buffer`: scriptPubKey

#### Result

changeAddress `String`: encoded change address

#### Examples

      const script = RVNBOX.Script.encode([
        Buffer.from("RVNBOX", "ascii"),
        RVNBOX.Script.opcodes.OP_CAT,
        Buffer.from("RVNBOX", "ascii"),
        RVNBOX.Script.opcodes.OP_EQUAL
      ]);
      const p2sh_hash160 = RVNBOX.Crypto.hash160(script);
      const scriptPubKey = RVNBOX.Script.scriptHash.output.encode(p2sh_hash160);

      // mainnet address from output script
      RVNBOX.Address.fromOutputScript(scriptPubKey);
      // pz0qcslrqn7hr44hsszwl4lw5r6udkg6zqncnufkrl

      // testnet address from output script
      RVNBOX.Address.fromOutputScript(scriptPubKey, 'testnet');
      // rvntest:pz0qcslrqn7hr44hsszwl4lw5r6udkg6zqh2hmtpyr

### `isHash160`

Detect if an addess is a hash160.

#### Arguments

1.  address `String`: address

#### Result

isHash160 `Boolean`: true/false if address is hash160

#### Examples

      let hash160Address = '428df38e23fc879a25819427995c3e6355b12d33';
      RVNBOX.Address.isHash160(hash160Address);
      // true

      let notHash160Address = 'pz8a837lttkvjksg0jjmmulqvfkgpqrcdgufy8ns5s';
      RVNBOX.Address.isHash160(notHash160Address);
      // false

### `details`

Return details about an address including balance.

#### Arguments

1.  addresses `Array` required: Array with maximum of 20 legacy addresses.

#### Result

details `Array`: Array of Objects w/ details about addresses including balance

#### Examples

    (async () => {
      try {
        let details = await RVNBOX.Address.details(['1BFHGm4HzqgXXyNX8n7DsQno5DAC4iLMRA']);
        console.log(details)
      } catch(error) {
       console.error(error)
      }
    })()

    // [{
    //   "addrStr": "1BFHGm4HzqgXXyNX8n7DsQno5DAC4iLMRA",
    //   "balance": 0.36781097,
    //   "balanceSat": 36781097,
    //   "totalReceived": 0.36781097,
    //   "totalReceivedSat": 36781097,
    //   "totalSent": 0,
    //   "totalSentSat": 0,
    //   "unconfirmedBalance": 0,
    //   "unconfirmedBalanceSat": 0,
    //   "unconfirmedTxApperances": 0,
    //   "txApperances": 7,
    //   "transactions": [
    //     "f737485aaee3c10b13013fa109bb6294b099246134ca9885f4cc332dbc6c9bb4",
    //     "decd5b9c0c959e4e543182093e8f7f8bc7a6ecd96a8a062daaeff3667f8feca7",
    //     "94e69a627a34ae27fca81d15fff4323a7ce1f7c275c7485762ce018221017632",
    //     "e67c70787af7f3506263c9eda007f3d2d24bd750ff95b5c50a120d9118dfd807",
    //     "8e5e00704a147d54028f94d52df7730e821b9c6cd4bd29494e5636f49c199d6a",
    //     "15102827c108566ea5daf725c09079c1a3f42ef99d1eb68ea8c584f7b16ab87a",
    //     "cc27be8846276612dfce5924b7be96556212f0f0e62bd17641732175edb9911e"
    //   ]
    // }]

    (async () => {
      try {
        let details = await RVNBOX.Address.details(['1BFHGm4HzqgXXyNX8n7DsQno5DAC4iLMRA', "qp7ekaepv3wf2nq035hevcma4x9sxmp3w56048g6ra"]);
        console.log(details)
      } catch(error) {
       console.error(error)
      }
    })()

    // [ { balance: 0.36781097,
    //   balanceSat: 36781097,
    //   totalReceived: 0.36781097,
    //   totalReceivedSat: 36781097,
    //   totalSent: 0,
    //   totalSentSat: 0,
    //   unconfirmedBalance: 0,
    //   unconfirmedBalanceSat: 0,
    //   unconfirmedTxApperances: 0,
    //   txApperances: 7,
    //   transactions:
    //    [ 'f737485aaee3c10b13013fa109bb6294b099246134ca9885f4cc332dbc6c9bb4',
    //      'decd5b9c0c959e4e543182093e8f7f8bc7a6ecd96a8a062daaeff3667f8feca7',
    //      '94e69a627a34ae27fca81d15fff4323a7ce1f7c275c7485762ce018221017632',
    //      'e67c70787af7f3506263c9eda007f3d2d24bd750ff95b5c50a120d9118dfd807',
    //      '8e5e00704a147d54028f94d52df7730e821b9c6cd4bd29494e5636f49c199d6a',
    //      '15102827c108566ea5daf725c09079c1a3f42ef99d1eb68ea8c584f7b16ab87a',
    //      'cc27be8846276612dfce5924b7be96556212f0f0e62bd17641732175edb9911e' ],
    //   legacyAddress: '1BFHGm4HzqgXXyNX8n7DsQno5DAC4iLMRA' },
    // { balance: 0,
    //   balanceSat: 0,
    //   totalReceived: 0,
    //   totalReceivedSat: 0,
    //   totalSent: 0,
    //   totalSentSat: 0,
    //   unconfirmedBalance: 0,
    //   unconfirmedBalanceSat: 0,
    //   unconfirmedTxApperances: 0,
    //   txApperances: 0,
    //   transactions: [],
    //   legacyAddress: '1CT9huFgxMFveRvzZ7zPPJNoaMm2Fo64VH' } ]

### `utxo`

Return list of uxto for address

#### Arguments

1.  addresses `Array` required: Array with maximum of 20 legacy addresses.

#### Result

utxo `Array`: Array of arrays with utxo for addresses

#### Examples

    (async () => {
      try {
        let utxo = await RVNBOX.Address.utxo(['1BFHGm4HzqgXXyNX8n7DsQno5DAC4iLMRA']);
        console.log(utxo);
      } catch(error) {
       console.error(error)
      }
    })()

    // [[
    //   {
    //     "address": "1BFHGm4HzqgXXyNX8n7DsQno5DAC4iLMRA",
    //     "txid": "f737485aaee3c10b13013fa109bb6294b099246134ca9885f4cc332dbc6c9bb4",
    //     "vout": 0,
    //     "scriptPubKey": "76a9147064aa0c2de4e79e6c0a1290f769e40b3dda1b8e88ac",
    //     "amount": 0.299,
    //     "satoshis": 29900000,
    //     "height": 528796,
    //     "confirmations": 16
    //   },
    //   {
    //     "address": "1BFHGm4HzqgXXyNX8n7DsQno5DAC4iLMRA",
    //     "txid": "decd5b9c0c959e4e543182093e8f7f8bc7a6ecd96a8a062daaeff3667f8feca7",
    //     "vout": 0,
    //     "scriptPubKey": "76a9147064aa0c2de4e79e6c0a1290f769e40b3dda1b8e88ac",
    //     "amount": 0.04839108,
    //     "satoshis": 4839108,
    //     "height": 528573,
    //     "confirmations": 239
    //   }
    // ]]

    (async () => {
      try {
        let utxo = await RVNBOX.Address.utxo(['1BFHGm4HzqgXXyNX8n7DsQno5DAC4iLMRA', "qp7ekaepv3wf2nq035hevcma4x9sxmp3w56048g6ra"]);
        console.log(utxo);
      } catch(error) {
       console.error(error)
      }
    })()

    // [ [ { txid: 'f737485aaee3c10b13013fa109bb6294b099246134ca9885f4cc332dbc6c9bb4',
    //     vout: 0,
    //     scriptPubKey: '76a9147064aa0c2de4e79e6c0a1290f769e40b3dda1b8e88ac',
    //     amount: 0.299,
    //     satoshis: 29900000,
    //     height: 528796,
    //     confirmations: 478,
    //     legacyAddress: '1BFHGm4HzqgXXyNX8n7DsQno5DAC4iLMRA' },
    //   { txid: 'decd5b9c0c959e4e543182093e8f7f8bc7a6ecd96a8a062daaeff3667f8feca7',
    //     vout: 0,
    //     scriptPubKey: '76a9147064aa0c2de4e79e6c0a1290f769e40b3dda1b8e88ac',
    //     amount: 0.04839108,
    //     satoshis: 4839108,
    //     height: 528573,
    //     confirmations: 701,
    //     legacyAddress: '1BFHGm4HzqgXXyNX8n7DsQno5DAC4iLMRA' }],
    //     [] ]

### `unconfirmed`

Return list of unconfirmed transactions for address

#### Arguments

1.  addresses `Array` required: Array with maximum of 20 legacy addresses.

#### Result

unconfirmed `Array`: Array of arrays with unconfirmed transactions for addresses

#### Examples

    (async () => {
      try {
        let unconfirmed = await RVNBOX.Address.unconfirmed(['1Fg4r9iDrEkCcDmHTy2T79EusNfhyQpu7W']);
        console.log(unconfirmed);
      } catch(error) {
       console.error(error)
      }
    })()

    // [[
    //   {
    //     "txid": "e0aadd861a06993e39af932bb0b9ad69e7b37ef5843a13c6724789e1c94f3513",
    //     "vout": 1,
    //     "scriptPubKey": "76a914a0f531f4ff810a415580c12e54a7072946bb927e88ac",
    //     "amount": 0.00008273,
    //     "satoshis": 8273,
    //     "confirmations": 0,
    //     "ts": 1526680569,
    //     "legacyAddress": "1Fg4r9iDrEkCcDmHTy2T79EusNfhyQpu7W"
    //   }
    // ]];

    (async () => {
      try {
        let unconfirmed = await RVNBOX.Address.unconfirmed(['1Fg4r9iDrEkCcDmHTy2T79EusNfhyQpu7W', "qp7ekaepv3wf2nq035hevcma4x9sxmp3w56048g6ra"])
        console.log(unconfirmed);
      } catch(error) {
       console.error(error)
      }
    })()

    // [
    //   [
    //     {
    //       "txid": "e0aadd861a06993e39af932bb0b9ad69e7b37ef5843a13c6724789e1c94f3513",
    //       "vout": 1,
    //       "scriptPubKey": "76a914a0f531f4ff810a415580c12e54a7072946bb927e88ac",
    //       "amount": 0.00008273,
    //       "satoshis": 8273,
    //       "confirmations": 0,
    //       "ts": 1526680569,
    //       "legacyAddress": "1Fg4r9iDrEkCcDmHTy2T79EusNfhyQpu7W"
    //     }
    //   ],
    //   []
    // ];
