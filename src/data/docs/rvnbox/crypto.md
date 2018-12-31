---
title: Crypto
icon: link
ordinal: 8
---

### `sha256`

Utility for creating sha256 hash digests of data

#### Arguments

1.  buffer `Buffer`: data to be hashed

#### Result

buffer `Buffer`: sha256 hash of data

#### Examples

      // buffer from hex
      let buffer = Buffer.from('0101010101010101', 'hex')
      RVNBOX.Crypto.sha256(buffer)
      //

      // buffer from hex
      let buffer = Buffer.from('031ad329b3117e1d1e2974406868e575d48cff88e8128ba0eedb10da053785033b', 'hex')
      RVNBOX.Crypto.sha256(buffer)
      //

      // buffer from hex
      let buffer = Buffer.from('03123464075c7a5fa6b8680afa2c962a02e7bf071c6b2395b0ac711d462cac9354', 'hex')
      RVNBOX.Crypto.sha256(buffer)
      //

### `ripemd160`

Utility for creating ripemd160 hash digests of data

#### Arguments

1.  buffer `Buffer`: data to be hashed

#### Result

buffer `Buffer`: ripemd160 hash of data

#### Examples

      // buffer from hex
      let buffer = Buffer.from('0101010101010101', 'hex')
      RVNBOX.Crypto.ripemd160(buffer)
      //

      // buffer from hex
      let buffer = Buffer.from('75618d82d1f6251f2ef1f42f5f0d5040330948a707ff6d69720dbdcb00b48aab', 'hex')
      RVNBOX.Crypto.ripemd160(buffer)
      //

      // buffer from hex
      let buffer = Buffer.from('978c09dd46091d1922fa01e9f4a975b91a371f26ba8399de27d53801152121de', 'hex')
      RVNBOX.Crypto.ripemd160(buffer)
      //

### `hash256`

Utility for creating double sha256 hash digests of data

#### Arguments

1.  buffer `Buffer`: data to be hashed

#### Result

buffer `Buffer`: double sha256 hash of data

#### Examples

      // buffer from hex
      let buffer = Buffer.from('0101010101010101', 'hex')
      RVNBOX.Crypto.hash256(buffer)
      //

      // buffer from hex
      let buffer = Buffer.from('031ad329b3117e1d1e2974406868e575d48cff88e8128ba0eedb10da053785033b', 'hex')
      RVNBOX.Crypto.hash256(buffer)
      //

      // buffer from hex
      let buffer = Buffer.from('03123464075c7a5fa6b8680afa2c962a02e7bf071c6b2395b0ac711d462cac9354', 'hex')
      RVNBOX.Crypto.hash256(buffer)
      //

### `hash160`

Utility for creating ripemd160(sha256()) hash digests of data

#### Arguments

1.  buffer `Buffer`: data to be hashed

#### Result

buffer `Buffer`: ripemd160(sha256()) hash of data

#### Examples

      // buffer from hex
      let buffer = Buffer.from('0101010101010101', 'hex')
      RVNBOX.Crypto.hash160(buffer)
      //

      // buffer from hex
      let buffer = Buffer.from('031ad329b3117e1d1e2974406868e575d48cff88e8128ba0eedb10da053785033b', 'hex')
      RVNBOX.Crypto.hash160(buffer)
      //

      // buffer from hex
      let buffer = Buffer.from('03123464075c7a5fa6b8680afa2c962a02e7bf071c6b2395b0ac711d462cac9354', 'hex')
      RVNBOX.Crypto.hash160(buffer)
      //

### `randomBytes`

Generates cryptographically strong pseudo\-random data. The size argument is a number indicating the number of bytes to generate.

#### Arguments

1.  numBytes `number`: number of bytes to generate

#### Result

buffer `Buffer`: random bytes encoded as a buffer

#### Examples

      RVNBOX.Crypto.randomBytes(16)
      //

      RVNBOX.Crypto.randomBytes(20)
      //

      RVNBOX.Crypto.randomBytes(24)
      //

      RVNBOX.Crypto.randomBytes(28)
      //

      RVNBOX.Crypto.randomBytes(32)
      //
