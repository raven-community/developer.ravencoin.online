---
title: RVNBOX scaffolds
author: Gabriel Cardona
contributors: [
MSFTserver,
]
publishedAt: 2018-12-20
updatedAt: 2018-12-20
---

The goal of RVNBOX is to accelerate how quickly $RVN devs can create their apps. With that in mind today we’re launching Scaffolds. This is a way to bootstrap a Ravencoin application in under a minute.

When creating a new application on any platform too much time is spent setting everything up and configuring it. RVNBOX scaffolds do the heavy lifting for you and let you focus on building your app.

#### Setup

1.  [Install `rvnbox-sdk`](https://www.npmjs.com/package/rvnbox-sdk) globally
    `npm install rvnbox-sdk --global`

### React

To quickly create a [React app w/ RVNBOX web bindings](https://github.com/raven-community/rvnbox-scaffold-react) follow these steps.

#### Setup

1.  Scaffold a React app w/ RVNBOX web bindings
    `rvnbox new myApp --scaffold react`
2.  `cd` into new app
    `cd myApp/`
3.  Install dependencies
    `npm install`
4.  Start the app
    `npm start`
5.  Open a browser to `http://localhost:3000/` and confirm you are seeing a basic BIP44 wallet
6.  Win

![Hello RVNBOX](/images/bip44.png)

### Angular

To quickly create an [Angular app w/ RVNBOX web bindings](https://github.com/raven-community/rvnbox-scaffold-angular) follow these steps.

#### Setup

1.  Scaffold an Angular app w/ RVNBOX web bindings
    `rvnbox new myApp --scaffold angular`
2.  `cd` into new app
    `cd myApp/`
3.  Install dependencies
    `npm install`
4.  Start the app
    `npm start`
5.  Open a browser to `http://localhost:4200/` and confirm you are seeing a basic BIP44 wallet
6.  Win

![Hello RVNBOX](/images/bip44.png)

### Node

To quickly create a [Node JS app w/ RVNBOX bindings](https://github.com/raven-community/rvnbox-scaffold-node) follow these steps.

#### Setup

1.  Scaffold a NodeJS app w/ RVNBOX bindings
    `rvnbox new myApp --scaffold node`
2.  `cd` into new app
    `cd myApp/`
3.  Install dependencies
    `npm install`
4.  Start the app
    `npm start`
5.  Confirm you are seeing a basic BIP44 wallet
6.  Win

![Hello RVNBOX](/images/nodebip44.png)

### Config

By default your new app will connect to RVNBOX Cloud over [REST](http://rest.ravencoin.online/). If you want to connect to your own REST services pass in a config object when instantiating `rvnbox-sdk`.

```
let RVNBOX = new RVNBOXSDK({
    restURL: 'my-rest-url'
});
```

### Summary

W/ RVNBOX Scaffolds you can now create a $RVN app in under a minute. This should accelerate how quickly developers can create Ravencoin apps. Go developers go!
