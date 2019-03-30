# Fang Babel

[Fang](https://www.npmjs.com/package/@khalyomede/fang-pug) plugin to use babel.

## Summary

- [Installation](#installation)
- [Usage](#usage)

## Installation

1. Install [fang](https://www.npmjs.com/package/@khalyomede/fang-pug)

```bash
npm install --save-dev @khalyomede/fang@0.*
```

2. Install this plugin

```bash
npm install --save-dev @khalyomede/fang-babel@0.*
```

3. Create a task file (on the root of your folder)

```javascript
// fang.js
const fang = require('@khalyomede/fang');
const babel = require('@khalyomede/fang-babel');

const js = () => fang.from('src/js/**/*.js')
  .do(babel())
  .save('dist/js');

const build = [js];

module.exports = { build };
```

## Usage

- [Example 1: simple usage](#example-1-simple-usage)
- [Example 2: with options](#example-2-with-options)

### Example 1: simple usage

In this example, we will convert our javascript files to supports earlier browser using babel.

```javascript
// fang.js
const fang = require('@khalyomede/fang');
const babel = require('@khalyomede/fang-babel');

const js = () => fang.from('src/js/**/*.js')
  .do(babel())
  .save('dist/js');

const build = [js];

module.exports = { build };
```

### Example 2: with options

In this example, we will ask babel to add an additional inlined source map using the options parameter of this plugin.

```javascript
// fang.js
const fang = require('@khalyomede/fang');
const babel = require('@khalyomede/fang-babel');

const js = () => fang.from('src/js/**/*.js')
  .do(babel({
      sourceMaps: 'inline'
  }))
  .save('dist/js');

const build = [js];

module.exports = { build };
```