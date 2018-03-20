const buf = Buffer.from('hello world', 'ascii');

// Prints: 68656c6c6f20776f726c64
console.log(buf.toString('hex'));

// Prints: aGVsbG8gd29ybGQ=
console.log(buf.toString('base64'));

var buf2= new Buffer(26);

for (var i = 0; i< buf2.length; i++) {
	buf2[i]=i+97;
}


console.log(buf2.toString('ascii'));