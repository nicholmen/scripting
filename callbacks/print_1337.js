function rot13(s)
 {
    return (s ? s : this).split('').map(function(_)
     {
        if (!_.match(/[A-Za-z]/)) return _;
        c = Math.floor(_.charCodeAt(0) / 97);
        k = (_.toLowerCase().charCodeAt(0) - 83) % 26 || 26;
        return String.fromCharCode(k + ((c == 0) ? 64 : 96));
     }).join('');
 }

 var getHTML = require('./http-functions');

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step5.html'
}

getHTML (requestOptions, function(result) {console.log(rot13(result))})