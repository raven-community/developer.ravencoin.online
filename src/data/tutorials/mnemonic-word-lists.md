---
title: Mmemonic Word Lists
author: Gabriel Cardona
contributors: [
MSFTserver,
]
publishedAt: 2018-12-20
updatedAt: 2018-12-20
---

Ravencoinh is meant for people all over EARTH. Most of those people don’t speak english. That’s why today we’re releasing `wordLists` so you can generate mnemonics in 8 different languages to help spread $RVN to people all over the planet.

## wordLists

[RVNBOX.Mnemonic](/rvnbox/docs/mnemonic/#validate) now has a [wordLists](/rvnbox/docs/mnemonic/#wordlists) method which returns an object w/ the following keys:

```javascript
{
    chinese_simplified: [],
    chinese_traditional: [],
    english: [],
    french: [],
    italian: [],
    japanese: [],
    korean: [],
    spanish: []
}
```

Each of these keys contains an array w/ 2048 words in that language. 4 `RVNBOX.Mnemonic` methods now accept that wordlist as their 2nd argument and will create and validate mnemonics in those languages.

The methods which now accepts a `wordslist` argument are

- [generate](/rvnbox/docs/mnemonic/#generate)
- [fromEntropy](/rvnbox/docs/mnemonic/#fromentropy)
- [toEntropy](/rvnbox/docs/mnemonic/#toentropy)
- [validate](/rvnbox/docs/mnemonic/#validate)

### Examples

#### Chinese simplified

```javascript
RVNBOX.Mnemonic.generate(128, RVNBOX.Mnemonic.wordLists().chinese_simplified)
// 南 英 钉 油 冷 馏 扶 搬 特 规 波 顺
```

#### Chinese traditional

```javascript
RVNBOX.Mnemonic.generate(128, RVNBOX.Mnemonic.wordLists().chinese_traditional)
// 蒸 融 陣 默 甲 蓋 躺 靈 原 富 恆 份
```

#### French

```javascript
RVNBOX.Mnemonic.generate(128, RVNBOX.Mnemonic.wordLists().french)
// annonce ampleur sanglier peser acheter cultiver abroger embellir résoudre dialogue grappin lanterne
```

#### Italian

```javascript
RVNBOX.Mnemonic.generate(128, RVNBOX.Mnemonic.wordLists().italian)
// raschiato comodo petalo lira ipotesi mondina scettro ritmico bacino abrasivo attrito eletto
```

#### Japanese

```javascript
RVNBOX.Mnemonic.generate(128, RVNBOX.Mnemonic.wordLists().japanese)
// かいが　こける　つねづね　けおりもの　けむり　せんろ　しゃくほう　けんみん　あわせる　ひつぎ　みてい　たいない
```

#### Korean

```javascript
RVNBOX.Mnemonic.generate(128, RVNBOX.Mnemonic.wordLists().korean)
// 회색 제공 적성 만일 당장 확인 사람 화장 숫자 여군 대도시 하순
```

#### Spanish

```javascript
RVNBOX.Mnemonic.generate(128, RVNBOX.Mnemonic.wordLists().spanish)
// combate hundir trauma edad élite medio grave pie aduana donar pimienta bodega
```

## RVNBOX GUI

RVNBOX GUI has also been updated to generate mnemonics in all of the above languages. There is now a language selector on the configuration screen. Select the language that you’d like to use and restart your RVNBOX.

![](https://bigearth.github.io/bitblog/assets/language-select.png)

### Chinese simplified

![](https://bigearth.github.io/bitblog/assets/chinese-simplified.png)

### Chinese traditional

![](https://bigearth.github.io/bitblog/assets/chinese-traditional.png)

### French

![](https://bigearth.github.io/bitblog/assets/french.png)

### Italian

![](https://bigearth.github.io/bitblog/assets/italian.png)

### Japanese

![](https://bigearth.github.io/bitblog/assets/japanese.png)

### Korean

![](https://bigearth.github.io/bitblog/assets/korean.png)

### Spanish

![](https://bigearth.github.io/bitblog/assets/spanish.png)

## Summary

With `wordLists` it’s now easier than ever to generate mnemonics in languages other than english to help spread $RVN all over the EARTH.
