'use strict'

const http = require('http').createServer(webServer),
	fs = require('fs'),
	path = require('path'),
	url=require('url'),
	urls = [
		{
			id : 1,
			route : '',
			html : './assets/index.html'
		},
		{
			id : 2,
			route : 'acerca',
			html : './assets/acerca.html'
		},
		{
			id : 3,
			route : 'contacto',
			html : './assets/contacto.html'
		}
	];

function webServer(req,res) {
	let message='<h1>hola navegaro web</h1>',
	pathURL= path.basename(req.url),
	id = url.parse(req.url, true ).query.id

	console.log(pathURL)
	urls.forEach( (pos)=>{
		if (pos.route===pathURL) {
			res.writeHead(200, {'Content-Type':'text/html'});
			fs.readFile( pos.html, (err, data) => (err) ? console.log(err.message) : res.end(data) );

		}
	})

}

http.listen(3000)

console.log('servidor 300')
