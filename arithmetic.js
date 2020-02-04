function arithmetic(a, b, operator){
	if (typeof a !== "number" || typeof b !== "number" || typeof operator !== "string"){
		return null
	} else {

		if (operator === "add"){
		   return a + b
		} else if (operator === "subtract"){
			return a - b
		} else if (operator === "multiply"){
			return a * b
		} else{
			return a / b
		}

	}

}