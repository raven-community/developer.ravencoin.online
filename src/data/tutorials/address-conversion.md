---
title: Address Conversion
author: Gabriel Cardona
contributors: [
MSFTserver,
]
publishedAt: 2018-12-20
updatedAt: 2018-12-20
---

When Ravencoin began as a fork of $BTC on Jan 3rd 2017 it changed the first letter to R.

### Conversion Tool

RVNBOX recently added its own conversion tool so you can quickly and easily convert legacy base58Check encoded Ravencoin addresses in to other formats.

Simply paste in a legacy and RVNBOX will convert it and generate QR codes.

You can also paste in a private key in Wallet Import Format (WIF) to generate legacy addresses and QR codes.

![Converter](https://bigearth.github.io/bitblog/assets/converter.png)

We’re using [rvnaddr.js](https://github.com/raven-community/rvnaddrjs) along w/ [qrcode.react](https://github.com/zpao/qrcode.react).

```javascript
let wif = 'L3npdkC5BkLZP2d6orb5ZefXYZFzkiteDB5okSgyuYJeGXLH3QNA'
let ecpair = RVNBOX.ECPair.fromWIF(wif)
let base58Check = RVNBOX.ECPair.toLegacyAddress(ecpair)
let base58CheckQR = <QRCode value={base58Check} />
let wifQR = <QRCode value={wif} />
```

### Sending actual funds

All the addresses in RVNBOX are 100% legit on the $RVN network. However RVNBOX doesn’t actually connect to the Ravencoin network so if you were to send actual $RVN to one of these generated addresses you wouldn’t see it. You would be able to see it in a live block explorer.

You can safely sweep any funds sent to a RVNBOX generated address into a wallet via the private key WIF. But we strongly advice against sending any actual funds to a RVNBOX address. This is a development tool and not meant to handle actual funds.

If you want to send real coins to a RVNBOX address and then sweep them back into a live wallet we suggest using the $RVN testnet.
