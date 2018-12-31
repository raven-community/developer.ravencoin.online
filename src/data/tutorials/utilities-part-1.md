---
title: Utilities Part 1
author: Gabriel Cardona
contributors: [
MSFTserver,
]
publishedAt: 2018-12-20
updatedAt: 2018-12-20
---

`rvnbox-sdk` recently added 3 new Objects full of utility methods to help you accelerate your $RVN workflow. The `RavenCoin` methods convert between satoshis and whole units.

The `Address` methods let you convert legacy addresses as well as detecting address formats, types and networks.

The `Crypto` methods let you create sha256 and ripemd160 hashes as well as generate random bytes. Together the `RavenCoin` and `Crypto` utilities let you quickly build out a great $RVN application.

## RavenCoin

```javascript
RVNBOX.RavenCoin.toSatoshi(9)
// 900000000

RVNBOX.RavenCoin.toRavencoin(900000000)
// 9
```

[More Info](/rvnbox/docs/ravencoin)

## Address

```javascript
RVNBOX.Address.toLegacyAddress(
  'qzm47qz5ue99y9yl4aca7jnz7dwgdenl85jkfx3znl'
)
// 1HiaTupadqQN66Tvgt7QSE5Wg13BUy25eN

RVNBOX.Address.isLegacyAddress(
  'qqfx3wcg8ts09mt5l3zey06wenapyfqq2qrcyj5x0s'
)
// false

RVNBOX.Address.isMainnetAddress(
  'qqfx3wcg8ts09mt5l3zey06wenapyfqq2qrcyj5x0s'
)
// true

RVNBOX.Address.isTestnetAddress(
  'qqfx3wcg8ts09mt5l3zey06wenapyfqq2qrcyj5x0s'
)
//false

RVNBOX.Address.isP2PKHAddress(
  'qqfx3wcg8ts09mt5l3zey06wenapyfqq2qrcyj5x0s'
)
// true

RVNBOX.Address.isP2SHAddress(
  'qqfx3wcg8ts09mt5l3zey06wenapyfqq2qrcyj5x0s'
)
// false

RVNBOX.Address.detectAddressFormat(
  'qqfx3wcg8ts09mt5l3zey06wenapyfqq2qrcyj5x0s'
)
// legacy

RVNBOX.Address.detectAddressNetwork(
  'qqfx3wcg8ts09mt5l3zey06wenapyfqq2qrcyj5x0s'
)
// mainnet

RVNBOX.Address.detectAddressType(
  'qqfx3wcg8ts09mt5l3zey06wenapyfqq2qrcyj5x0s'
)
// p2pkh
```

[More Info](/rvnbox/docs/address)

## Crypto

```javascript
let buffer = Buffer.from('0101010101010101', 'hex')
RVNBOX.Crypto.sha256(buffer)
// <Buffer 04 ab c8 82 1a 06 e5 a3 09 37 96 7d 11 ad 10 22 1c b5 ac 3b 52 73 e4 34 f1 28 4e e8 71 29 a0 61>

let buffer = Buffer.from('0101010101010101', 'hex')
RVNBOX.Crypto.ripemd160(buffer)
// <Buffer 58 25 70 1b 4b 97 67 fd 35 06 3b 28 6d ca 35 82 85 3e 06 30>

let buffer = Buffer.from('0101010101010101', 'hex')
RVNBOX.Crypto.hash256(buffer)
// <Buffer 72 83 38 d9 9f 35 61 75 c4 94 5e f5 cc cf a6 1b 7b 56 14 3c bb f4 26 dd d0 e0 fc 7c fe 8c 3c 23>

let buffer = Buffer.from('0101010101010101', 'hex')
RVNBOX.Crypto.hash160(buffer)
// <Buffer ab af 11 19 f8 3e 38 42 10 fe 8e 22 2e ac 76 e2 f0 da 39 dc>

RVNBOX.Crypto.randomBytes(16)
// <Buffer 8c 5e 76 62 2f 4c bf cc 07 db b2 4f ea ea 1e d6>
```

[More Info](/rvnbox/docs/crypto)

## Credits

`rvnbox-sdk` leverages several really great libraries. Please show these people support.

- [https://nodejs.org/api/crypto.html](https://nodejs.org/api/crypto.html)
- [https://github.com/raven-community/ravencoinjs-lib](https://github.com/raven-community/ravencoinjs-lib)
- [https://github.com/raven-community/bip39](https://github.com/raven-community/bip39)
- [https://github.com/raven-community/rvnaddrjs](https://github.com/raven-community/rvnaddrjs)
- [https://github.com/raven-community/satoshi-ravencoin](https://github.com/raven-community/satoshi-ravencoin)
