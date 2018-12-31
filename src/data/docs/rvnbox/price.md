---
title: Price
icon: dollar-sign
ordinal: 13
---

### `current`

Return current price ofR RVN in multiple currencies

#### Arguments

1.  currency `String` optional: Defaults to all listed currencies

#### Result

price `Object | number`: Price of all listed currencies or price of single requested currencies

#### Examples

    (async () => {
      try {
        let current = await RVNBOX.Price.current();
        console.log(current);
      } catch(error) {
       console.error(error)
      }
    })()

          // "USD": {
          //     "price": 0.0150055625,
          //     "volume_24h": 3232149.24082222,
          //     "market_cap": 37572653.0,
          //     "percent_change_1h": 0.41,
          //     "percent_change_24h": 4.33,
          //     "percent_change_7d": 17.68
          // },
          // "EUR": {
          //     "price": 0.0130987757,
          //     "volume_24h": 2821433.572492464,
          //     "market_cap": 32798221.0,
          //     "percent_change_1h": 0.41,
          //     "percent_change_24h": 4.33,
          //     "percent_change_7d": 17.68
          // }

    (async () => {
      let current = await RVNBOX.Price.current('usd');
      console.log(current);
    })()
    // "USD": {
    //     "price": 0.0150055625,
    //     "volume_24h": 3232149.24082222,
    //     "market_cap": 37572653.0,
    //     "percent_change_1h": 0.41,
    //     "percent_change_24h": 4.33,
    //     "percent_change_7d": 17.68
    // }
