const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

let formidable= require('formidable')
let fse= require('fs-extra')
const util = require('util')

const server = http.createServer((req, res) => {
  res.statusCode = 200;

  if (req.method == 'GET') {
	  	let form= `<form action="/upload" enctype="multipart/form-data" method="post">
		<input type="file" name="upload"  /><br /> <br />
		<input type="submit" value="enviar" />
	  </form>`

  	res.setHeader('Content-Type', 'text/html');
  	res.end(form);
	}

	if (req.method=='POST' && req.url == '/upload') {
		let form= new formidable.IncomingForm()

		form
			.parse(req, (err, fields, files) => {
		      res.writeHead(200, {'content-type': 'text/plain'});
		      res.write('received upload:\n\n');
		      res.end(util.inspect({fields: fields, files: files}));
	    	})
	    	.on('progress', (bytesReceived, bytesExpected)=>{
	    		let porcentageCompleto= (bytesReceived / bytesExpected)* 100
	    		console.log(porcentageCompleto)
	    	})
	    	.on('error', (err)=>{
	    		console.log(err)
	    	})
	   		.on('end', function(fields, files) {
       
        let temp_path = this.openedFiles[0].path,
        	file_name = this.openedFiles[0].name,
        	new_location = './upload/'+file_name
 
        fse.copy(temp_path, new_location , function(err) {  
            if (err) {
                console.error(err);
            } else {
                console.log("success!")
            }
        });
    });

	    return;

	}


});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
