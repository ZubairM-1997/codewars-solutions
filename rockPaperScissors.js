const getWinner = (n) => {
	return `Player ${n} wins!`
}


const rps = (p1, p2) => {

	if(p1 === "rock" && p2 === "scissors"){
		return getWinner(1)
	} else if(p1 === "scissors" && p2 === "paper"){
		return getWinner(1)
	} else if (p1 === "paper" && p2 === "rock"){
		return getWinner(1)

	} else if (p1 === "scissors" && p2 === "rock"){
		return getWinner(2)
	}else if (p1 === "paper" && p2 === "scissors"){
		return getWinner(2)
	}else if (p1 === "rock" && p2 === "paper" ){
		return getWinner(2)
	} else {
		return "Draw"
	}



};