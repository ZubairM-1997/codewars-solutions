function solution(string) {

	if (typeof string !== "string"){
	  return TypeError("Please enter in a string format")
	} else {

	  let array = string.split("")
	  const regex = /[A-Z]/
	  let index;

	  for (let i = 0; i < array.length; i++){
		let char = array[i]
		if (regex.test(char)){
		  index = i
		}
	  }
	  array.splice(index , 0, " ")
	  return array.join("")

	}
  }

  solution("eiffelTower")