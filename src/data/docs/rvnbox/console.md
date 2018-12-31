---
title: Console
icon: terminal
ordinal: 2
---

Launch a console w/ the entire Ravencoin RPC available as well as dozens of helper methods via a built in `RVNBOX` object. Pass in an `--environment` flag to connect to environments defined in a local `rvnbox.js`. By default console will connect to your development environment.

```bash
$ rvnbox console --environment production
> RVNBOX.
RVNBOX.Address               RVNBOX.RavenCoin           RVNBOX.Block                 RVNBOX.Blockchain            RVNBOX.Control               RVNBOX.Crypto                RVNBOX.ECPair                RVNBOX.Generating            RVNBOX.restURL
RVNBOX.HDNode                RVNBOX.Mining                RVNBOX.Mnemonic              RVNBOX.Network               RVNBOX.Price                 RVNBOX.RawTransactions       RVNBOX.Script                RVNBOX.Socket
RVNBOX.Transaction           RVNBOX.TransactionBuilder    RVNBOX.Util
```

### <a name="test-ideas"></a> Quickly test your ideas

```javascript
rvnbox console

> RVNBOX.RavenCoin.toSatoshi(9)
// 900000000

> RVNBOX.Address.toLegacyAddress('qzm47qz5ue99y9yl4aca7jnz7dwgdenl85jkfx3znl')
// 1HiaTupadqQN66Tvgt7QSE5Wg13BUy25eN

// create mnemonic
> let mnemonic = RVNBOX.Mnemonic.generate(128);
// ancient slide suggest chaos vivid property trophy faith bamboo lunch save hint

// create seed buffer from mnemonic
> let seedBuffer = RVNBOX.Mnemonic.toSeed(mnemonic);

// create HDNode from seed buffer
> let hdNode = RVNBOX.HDNode.fromSeed(seedBuffer);

// derive hardened child HDNode
> let childNode = RVNBOX.HDNode.derivePath(hdNode, "m/44'/175'/0'");
> RVNBOX.HDNode.toXPriv(childNode)
// xprv9yHczLBaxwHo85o8mJVHSu1ghxEWM2QZcrvWFvHWXgkqfuqNz6EDNxv4wAPTBwX7nkrnBTPgdCZi7qyQAF72MF4KTq9UzzygDhvBajpwScs
```
