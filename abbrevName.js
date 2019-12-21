function abbrevName(name){
	if(typeof name !== "string"){
		throw new TypeError("Name must be a string")
	}else{
		let upperCaseName = name.toUpperCase()
		let arrayName = upperCaseName.split(" ")
		let firstName = arrayName[0]
		let surname = arrayName[1]

		let initals = firstName.charAt(0) + "." + surname.charAt(0)
		return initals
	}
}

abbrevName("Sam Harris")