'use strict';

var fs= require('fs'),
	readStream = fs.createReadStream('assets/notas.txt'),
	writeStream = fs.createWriteStream('assets/testbak.txt');

	readStream.pipe(writeStream);


	readStream.on('data', (chunk) => {
		  console.log(`Received ${chunk.length} bytes of data.`);
	});


readStream.on('end',()=>{
	console.log('termine de leer el archivo')
})