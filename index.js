var path    = require('path');
var fs      = require('mz/fs');
var send    = require('koa-send');
var util    = require('./lib/util');
var httpRxg = /^http/;

function respond(rule) {
  return function *respond(next) {
    for(var i = 0, len = rule.length; i < len; i++) {
      var pattern = rule[i].pattern;
      var responder = rule[i].responder;

      if (typeof pattern == 'string') {
        pattern = new RegExp(pattern);
      }

      if (!pattern.test(this.url)) {
        continue;
      }

      responder = util.fixResponder(this.url, pattern, responder);

      if (typeof responder == 'string') {
        // 线上资源
        if (httpRxg.test(responder)) {
          this.url = responder;
        // 本地资源
        } else {
          var stat = yield fs.stat(responder);

          if (stat.isFile()) {
            if (yield send(this, responder)) return;
          }
        }
      }

      break;
    };

    yield next;
  };
}

module.exports = respond;