# mat-respond

[![npm version](https://badge.fury.io/js/mat-respond.svg)](http://badge.fury.io/js/mat-respond)

## Installation

```sh
npm install --save-dev mat-respond
```

## Usage

```javascript
var mat  = require('mat');
var res  = require('mat-respond');

// 线上环境
mat.task('online', function () {
  mat.use(res([{
    pattern: '(.*)-min.js',
    responder: '$1.js'
  }]))
})
```

## Options

