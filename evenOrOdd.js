// Create a function (or write a script in Shell) that takes an integer as an argument
// and returns "Even" for even numbers or "Odd" for odd numbers.


function even_or_odd(number) {
	// ...
	if (number % 1 !== 0){
		throw new Error("You cannot enter floats")
	} else if(typeof number !== "number"){
		throw new TypeError("You did not enter a number")
	} else {

		if (number % 2 === 0){
			return "Even"
		} else {
			return "Odd"
		}
	}

  }

  even_or_odd(222)