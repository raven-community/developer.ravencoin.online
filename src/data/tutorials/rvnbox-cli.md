---
title: rvnbox-sdk
author: Gabriel Cardona
contributors: [
MSFTserver,
]
publishedAt: 2018-12-20
updatedAt: 2018-12-20
---

RVNBOX aims to be the go-to toolset for $RVN developers. We want you to be able to run your code and tests against your RVNBOX before deploying to live environments and aim for 100% Ravencoin JSON RPC API coverage.

Today we’re happy to announce that `rvnbox-sdk` has 100% of the Ravencoin JSON RPC. You can now use `rvnbox-sdk` to have your code interface directly w/ your live running Ravencoin node. Here’s how that would look.

### Installation

First install `rvnbox-sdk` via npm

```bash
npm install rvnbox-sdk --global
```

This gives you access to the `rvnbox` command line utility.

### Command line

You can now have `rvnbox` stub out an app scaffold and configuration. Here we’ll have it create a new app and give it the user, password and host of our running Ravencoin node and set the environment to `production`.

```bash
rvnbox new myApp
```

This will create a scaffold directory structure for a new $RVN app along w/ a configuration file which looks like:

```json
networks: {
    development: {
        restURL: "http://rest.ravencoin.online/v2/"
    }
}
```

### Console

Now you can fire up `rvnbox`’s console to send some commands to your running $RVN node.

```bash
rvnbox console
```

This will load the console and create a `RVNBOX` object w/ the entire $RVN JSON RPC available. That `RVNBOX` object can send commands to the running Ravencoin node that you configured in the previous step.

```bash
> RVNBOX.Network.getNetworkInfo().then((result) => { console.log(result); }, (err) => { console.log(err); });

{ version: 160200,
    subversion: '/Ravencoin:0.16.2(EB8.0)/',
    protocolversion: 70015,
    localservices: '0000000000000025',
    localrelay: true,
    timeoffset: 0,
    networkactive: true,
    connections: 15,
    networks: [
        {
            name: 'ipv4',
            limited: false,
            reachable: true,
            proxy: '',
            proxy_randomize_credentials: false
        },
        {
            name: 'ipv6',
            limited: false,
            reachable: true,
            proxy: '',
            proxy_randomize_credentials: false
        },
        {
            name: 'onion',
            limited: true,
            reachable: false,
            proxy: '',
            proxy_randomize_credentials: false
        }
    ],
    relayfee: 0.00001,
    incrementalfee: 0.00001,
    localaddresses: [
        { address: 'ip.address.of.abc.node', port: 8767, score: 1964 }
    ],
    warnings: ''
}
```

### Browser

You can also use `RVNBOX` from the browser. First install `rvnbox-sdk` locally w/ npm.

```bash
npm install rvnbox-sdk --save
```

Next you need to `require` or `import` `RVNBOXSDK` into your app depending on if you are transpiling ES6 or not. Once you `require` `RVNBOXSDK` into your app you then create an instance of `RVNBOX` and pass in a config object w/ the same values you used at the command line in the previous steps.

```javascript
let RVNBOXSDK = require('rvnbox-sdk/lib/rvnbox-sdk').default
let RVNBOX = new RVNBOXSDK()

RVNBOX.getnetworkinfo().then(
  result => {
    console.log(result)
  },
  err => {
    console.log(err)
  }
)
```

Again the entire Ravencoin JSON RPC is available on the `RVNBOX` object.

### Summary

RVNBOX can now be used from the command line or the browser to send commands to the RVN network.
