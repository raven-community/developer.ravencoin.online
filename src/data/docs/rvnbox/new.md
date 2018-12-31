---
title: New
icon: plus
ordinal: 1
---

RVNBOX will generate a new app w/ empty `src/` and `test/` directories and a `rvnbox.js` configured to connect to ravencoin.online’s Cloud.

### Usage

```bash
new [options] <name>
  Options:
  -s, --scaffold <scaffold>        The framework to use. Options include react, angular, node, next, vue and websockets. (Default: react)
  -r, --restURL <restURL>          The rest URL to use. default: https://trest.ravecoin.online/v1/
  -e, --environment <environment>  environment to map to restURL. Ex: production, staging. Default: development
  -h, --help                       output usage information

$ rvnbox new helloEARTH
$ rvnbox new helloEARTH --scaffold react
```

## `rvnbox.js`

Your `rvnbox.js` file will contain the default settings to connect to ravencoin.onlines’s Cloud.

```javascript
exports.config = {
  networks: {
    development: {
      restURL: 'https://trest.ravencoin.online/v1/',
    },
  },
}
```
