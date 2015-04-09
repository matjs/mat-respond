module.exports = {
    regExpEscape: function (str) {
      return str.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&');
    },
    fixResponder: function (url, pattern, responder) {
      var $v = /\$\d+/g;
      var m;
      var newRx;
      if(!$v.test(responder)){
        return responder;
      }

      m = url.match(pattern);

      if(!Array.isArray(m)){
        return responder;
      }

      for(var i = 0, l = m.length; i < l; i++){
        newRx = new RegExp('\\$' + i, 'g');
        responder = responder.replace(newRx, m[i]);
      }

      return responder;
    }
}