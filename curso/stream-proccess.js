var stdin= process.stdin,
	stdout=process.stdout,
	person={
		name: null,
		age:0
	}

function saveage(age) {
	person.age=age

	stdout.write('tiens '+age+' años')

	process.exit()
}



function savename(name) {
	person.name=name

	var question= 'holla '+ name +' cuanto años tienes?'

	quiz(question,saveage)

}


function quiz(question, callback) {
	stdin.resume()
	stdout.write(question+': ')

	stdin.once('data', (res)=>{
		callback( res.toString().trim() )
	})
}


	stdin.setEncoding('utf8')
quiz('como te llamas', savename) 