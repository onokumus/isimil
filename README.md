# isimil

> Türkiye'deki 81 ilden rastgele birinin adını döndüren, sıfır bağımlılıklı npm paketi.

[![CI](https://github.com/onokumus/isimil/actions/workflows/ci.yml/badge.svg)](https://github.com/onokumus/isimil/actions/workflows/ci.yml)
[![npm version](https://img.shields.io/npm/v/isimil.svg)](https://www.npmjs.com/package/isimil)
[![License: MIT](https://img.shields.io/badge/license-MIT-green.svg)](LICENSE)

## Kurulum

```bash
npm install isimil
```

## Kullanım

ESM + TypeScript:

```ts
import isimil, { all, random } from 'isimil';

random(); // => 'ankara'
random(); // => 'muş'

all; // => 81 ilin tamamı
```

CommonJS (Node ESM ↔ CJS birlikte çalışabilirliği üzerinden):

```js
const isimil = require('isimil');

isimil.random(); // => 'izmir'
isimil.all.length; // => 81
```

## API

### `all: readonly string[]`

81 ilin tamamını içeren, küçük harfli, sabit dizi.

### `random(): string`

81 ilden rastgele birini, eşit olasılıkla döndürür.

### `default` export

`{ all, random }` nesnesi.

## Geliştirme

Gereksinimler: Node.js ≥ 22.18 (testler Node'un yerleşik type-stripping'i ile doğrudan TypeScript üzerinde çalışır).

```bash
npm install
npm run check     # tip kontrolü + testler
npm run build     # dist/ derleme
```

## CI / Yayınlama

- **CI**: GitHub Actions (`node 22` ve `node 24` matrisinde tip kontrolü, test ve build).
- **Release tag check**: `v*` etiketi push edildiğinde otomatik doğrulama (tip kontrolü + test + build) çalışır.
- **npm'e yayınlama**: manuel olarak yapılır. `npm publish` çalıştırıldığında `prepublishOnly` hook'u otomatik olarak `check` ve `build` adımlarını çalıştırır.

## Lisans

MIT © [Osman Nuri Okumuş](https://github.com/onokumus)