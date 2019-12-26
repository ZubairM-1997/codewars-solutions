function uniqueString(str){
	if (typeof str === "string"){

	  let lowerCaseStr = str.toLowerCase()
	  let result = {};
	  let charArray = lowerCaseStr.split("").filter(char => char !== " ")

	  for (let i = 0; i < charArray.length; i++){
		let char = charArray[i]
		if(result[char] > 0){
			result[char]++
		}else{
			result[char] = 1
		}
	  }

	  let score = 0
	  for(const char in result){
		if(result[char] === 1) {
		  score++
		}else {
		  score--
		}
	  }

	  if (score === lowerCaseStr.length){
		console.log("This string does contain uniqe characters")
	  }else{
		console.log("This string does not contain unique characters")
	  }

	} else {
	  return null;
	}
}

uniqueString("The Empire State Building")