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

mat.task('online', function () {
  mat.use(res([
    // 将线上的js映射到本地
    {
      pattern: 'http://g.tbcdn.cn/mm/pub/0.10.5/boot/index-min.js',
      responder: '/Users/naij/project/pub/boot/index.js'
    }, 
    // 将-min后缀的js映射到非-min的js
    {
      pattern: '(.*)-min.js',
      responder: '$1.js'
    }
  ]))
})
```

```sh
mat online
```
