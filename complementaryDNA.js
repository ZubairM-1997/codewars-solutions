function DNAStrand(dna){

	if(typeof dna !== "string"){
		return TypeError("Please enter in a string format!")
	}

	const rules = {
		A: "T",
		T: "A",
		G: "C",
		C: "G"
	}

	let upperCaseDNA = dna.toUpperCase().split("");
	let complementaryDNA = []
	upperCaseDNA.forEach(symbol => {
		if(rules[symbol]) {
			complementaryDNA.push(rules[symbol])
		}
	})

	return complementaryDNA.join("")


}

DNAStrand("ATTGC")