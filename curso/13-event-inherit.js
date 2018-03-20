'use strict'

const EventEmitter= require('events').EventEmitter,
util = require('util').inherits

function clock() {
	 setInterval( ()=>  this.emit('tictac'), 1000 )
}

util(clock,EventEmitter)

clock.prototype.theTime = function() {
	let date = new Date(),
		hour = date.toLocaleTimeString();

	console.log(hour);
};


let cu= new clock()


cu.on('tictac', ()=>{
	cu.theTime()
})