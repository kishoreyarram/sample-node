var fs = require('fs');

module.exports = {
	create: function(file, contents, cb) {
		fs.writeFile(file, contents, cb);
	},

	watch: function(file, cb) {
		fs.watchFile(file, cb);
	}
};