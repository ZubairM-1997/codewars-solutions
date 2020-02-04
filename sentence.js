// for a given sentence p
// return the following
// how many vowels and consonants p has
// p with reversed words order and reversed cases
// every word in p separated by a dash
// p inserted with string "pv" before any vowel

function run(p){
	if (typeof p !== "string"){
		return TypeError("Please enter a string")
	}


  let finalObj = {
    reverseString: null,
    numberOfVowels: null,
    separatedByDash: p.split(" ").join("-"),
    pvBeforeEachVowel: null
  }

	let lowerCaseArray = p.toLowerCase().split("")
  	let vowelCount = 0;

	lowerCaseArray.forEach(letter => {
		if (letter === "a" || letter === "e" || letter === "i" || letter === "o" || letter === "u"){
		vowelCount++
		}
	})
	finalObj.numberOfVowels = vowelCount

	let arrayOfLetters = p.split("")
  	let reverseArray = []

	arrayOfLetters.forEach(char => {
		if (char === char.toLowerCase()){
			char = char.toUpperCase()
      		reverseArray.push(char)
		}else {
			char = char.toLowerCase();
      		reverseArray.push(char)
		}
	})

	finalObj.reverseString = reverseArray.reverse().join("")



	return finalObj

}


run("I am here")