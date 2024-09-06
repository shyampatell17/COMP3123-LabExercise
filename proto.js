function Student(sid, name){
	this.sid = sid
	this.name = name

    this.print = function(){
		console.log(this.sid)
		console.log(this.name)
    }

    this.printMe = () => {
		console.log(this.sid)
		console.log(this.name)
    }
}

Student.prototype.display = function(){
		console.log(this.sid)
		console.log(this.name)
}

let s = new Student(1, 'Pritesh')
s.display()
s.print() // Error: s.print is not a function
s.printMe() // Error: s.printMe is not a function

console.log(typeof Student)
console.log(typeof s)