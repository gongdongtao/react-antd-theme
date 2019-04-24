
//整合了对localStorage的各种操作
var Store = {

	get: function(key) {
      return window.localStorage[key];
	},
	set: function(key, value) {
		window.localStorage[key] = value;
	},
	getBool: function(key) {
		return window.localStorage[key] === 'true' ? true : false;
	},
	delete: function(key) {
		window.localStorage.removeItem(key);
	}
}

export default Store;
