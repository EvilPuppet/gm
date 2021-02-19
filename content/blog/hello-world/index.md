---
title: "Hello"
date: "2015-05-01T22:12:03.284Z"
description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
imgTitle: "./imgTitle.jpg"
---

## Utilizando o poder do Intl.NumberFormat()



Antigamente para fazer esse tipo de formatação nós precisávamos fazer algum método próprio ou cair em soluções como o [currency.js](https://currency.js.org/). Mas agora graças ao [Intl.NumberFormat](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat) nós conseguimos fazer isso de forma simples, somente utilizando o JS puro.

Vamos ver abaixo alguns exemplos na prática:

```javascript
// Digamos que a gente tenha o seguinte número
const money = 1234567.89;

// Para converter em Real ( retorna => R$ 1.234.567,89 )
console.log(new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(money));

// Para converter em Euros ( retorna => 1.234.567,89 € )
console.log(new Intl.NumberFormat('de-De', { style: 'currency', currency: 'EUR' }).format(money));

// Para converter em Yenes ( retorna => ￥1,234,567 )
console.log(new Intl.NumberFormat('ja-JP', { style: 'currency', currency: 'JPY' }).format(money));
```

