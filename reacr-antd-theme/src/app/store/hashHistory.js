import { createHashHistory } from 'history';

var history = createHashHistory({
  getUserConfirmation(message, callback) {
    window.$confirm(message, function() {
      callback(true)
    }, function() {
      callback(false)
    })
  }
})

// var warp = function(path) {
//   if (typeof path === 'object' && path.params) {
//     var params = path.params;
//     var res = [];
//     for (var k in params) {
//       res.push(k + '=' + encodeURIComponent(params[k]));
//     }
//     path.search = '?' + res.join('&');
//     delete path.params;
//   }
// }

// history.push = history.push.before(warp);
// history.replace = history.replace.before(warp);

export default history;