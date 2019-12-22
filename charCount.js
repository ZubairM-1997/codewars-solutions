function char(string){
	if (string.length === 0){
		return {}
	}
	else if (typeof string !== "string"){
		throw new TypeError("You have not entered a string")

	} else {
		const result = {};
		let lowerCaseString = string.toLowerCase();

		for (let i = 0; i < lowerCaseString.length; i++){
			let char = lowerCaseString[i]
			if (result[char] > 0){
				result[char]++
			} else {
				result[char] = 1
			}
		}
		return result

	}
}