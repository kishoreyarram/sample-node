var path = require('path');
var file = require('./file.js');
var abc = path.join(__dirname, 'abc.txt');


file.create(abc, 'Hey there!', function(err){
	if(!err) {
		console.log('Yes the file has been created');
	} else {
		console.log('Sorry the file wasnt created.');
	}

	
	file.watch(abc, function() {
		console.log('Yaay! The file has changed...');
	});
});


var http = require('http');

http.createServer(function(request,responce){
responce.writeHead(200);
responce.write("Hello, This is Kishore !");
responce.end();

}).listen(8080);

console.log('listening on port 8080....')