var gimme = function(inputArray){
	let orderedArray = inputArray.sort((a,b) => a - b)

	return inputArray.indexOf(orderedArray[1])
}





var gimme = function(inputArray){
	let orderedArray = inputArray.sort((a,b) => a - b)

  let middle = orderedArray[0]

  for (let i = 0; i < inputArray.length; i++){
    if (inputArray[i] === middle){
      return i
    }
  }
}

gimme([2,3,1])