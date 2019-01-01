---
title: Websockets Scaffold
author: Gabriel Cardona
contributors: [
MSFTserver,
]
publishedAt: 2018-12-20
updatedAt: 2018-12-20
---

### Intro

Websockets make possible an entirely new generation of apps which depend on real-time data. RVNBOX SDK has websockets built in. Our new scaffold enables you to bootstrap a Ravencoin React app with RVNBOX and websockets integration in under a minute. Accelerate your workflow with RVNBOX Scaffolds.

---

### Donate RVN

[@porlybe](https://twitter.com/porlybe) created Donate Function, which shows the power of websockets and let's you bootstrap your next great app. It's powered by [RVNBOX](/rvnbox) and lets you display logos and QR codes for donations.

![Websocket scaffold homepage](/images/websocket-scaffold-3.png)

When a donation is made a modal appears showing the amount.

![devRVN donation](/images/websocket-scaffold-1.png)

![devMSFT donation](/images/websocket-scaffold-2.png)

---

### Scaffold

We created a scaffold from Donate RVN to quickly let you bootstrap a React app w/ RVNBOX and websockets with no further setup. First run the `new` command and pass in the `--scaffold websockets` flag.

```bash
rvnbox new donateRVN --scaffold websockets
```

![websocket scaffold](/images/websocket-scaffold-4.png)

Next `cd` into `donateRVN`, install the deps and start the app.

```bash
cd donateRVN
npm install
npm start
```

Edit `src/donation.js` to add donation addresses, locations and logos. You can add new logos to `src/assets/`.

---

### Leveraging RVNBOX

Donate RVN shows very practical ways to leverage RVNBOX when creating an app. It demonstrates unit and address conversion, calling REST and listening on a websocket.

#### Unit Conversion

RVNBOX can convert whole RVN units [to satoshis](/rvnbox/docs/ravencoin/#tosatoshi) as well as converting satoshis to [bits](/rvnbox/docs/ravencoin/#tobits) and back to [whole units](/rvnbox/docs/ravencoin/#toravencoin). The scaffold [converts satoshis](https://github.com/raven-community/rvnbox-scaffold-websockets/blob/master/src/App.js#L50) to whole RVN.

```javascript
const value = RVNBOX.RavenCoin.toRavencoin(curr.satoshi)
```

#### Address Conversion

RVNBOX has methods for converting different [Address Types](/rvnbox/docs/address/).
```javascript
const isLegacyAddress = RVNBOX.Address.isLegacyAddress(address)
```

#### REST

RVNBOX SDK has [REST](http://rest.ravencoin.online) integration bundled. The scaffold calls [Address.details](https://github.com/raven-community/rvnbox-scaffold-websockets/blob/master/src/App.js#L121) to get back utxo for an address.

```javascript
RVNBOX.Address.details(addr).then(
  result => {
    result.forEach(r => {
      Object.keys(donations).forEach(p => {
        if (p === r.legacyAddress)
          donations[p].balance = (r.unconfirmedBalance + r.balance).toFixed(8)
      })
    })
    this.setState({
      donations,
    })
  },
  err => {
    console.log(err)
  }
)
```

#### Socket

The `Socket` class lets you quickly get real-time blockchain data. First [create an instance](/rvnbox/docs/socket/#constructor) and then [call listen](/rvnbox/docs/socket/#listen). Here's how the scaffold [updates the UI](https://github.com/raven-community/rvnbox-scaffold-websockets/blob/master/src/App.js#L81) after new tx data comes in.

```javascript
const socket = new RVNBOX.Socket()
socket.listen('transactions', this.handleNewTx)
```

---

### Summary

RVNBOX SDK has websockets built in which enables real-time data in Ravencoin apps. Our websocket scaffold lets you bootstrap a Ravencoin React app with RVNBOX and websockets integration in under a minute.
