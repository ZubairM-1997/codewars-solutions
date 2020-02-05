function findShort(s){
	if (typeof s !== "string"){
		return TypeError("You must enter a string")
	} else if (s.length === 0){
	   return Error("String must not be empty")
	} else {
	  let arrayOfWords = s.split(" ")
	  console.log(arrayOfWords)
	  let shortestLength = arrayOfWords[0].length
	  let shortestWord = arrayOfWords[0]

	  for (let i = 1; i < arrayOfWords.length; i++){
		  let word = arrayOfWords[i]
		  if (word.length < shortestLength){
			  shortestWord = word
			  shortestLength = word.length
		  }
	  }

	  return shortestLength;

	}
  }