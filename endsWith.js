// Complete the solution so that it returns true
// if the first argument(string) passed in ends with the 2nd argument (also a string).


function solution(str, ending){
	let stringArray = str.split("")
	let endingArray = ending.split("")

	let foundChar = []
	for (let i = 0; i < endingArray.length; i++){


		foundChar.push(stringArray.find(char => char === endingArray[i]))
	}

	if (foundChar[0] === undefined){
		return false
	} else {
		return true
	}


}