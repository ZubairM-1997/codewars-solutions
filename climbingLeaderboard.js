// Alice is playing an arcade game and wants to climb to the top of the leaderboard and wants to track her ranking.
// The game uses Dense Ranking, so its leaderboard works like this:

// The player with the highest score is ranked number 1 on the leaderboard.
// Players who have equal scores receive the same ranking number, and the next player(s) receive the immediately following ranking number.


// Function should return an integer array where each element represents Alice's rank
// Function parameters are
// scores: array of integers to represent leaderboard scores
// alice: array of integers that represents Alice's scores


function findRanking(leaderboard, alice_scores){

	let leaderBoardUnique = [...new Set(leaderboard)] //index + 1 = rank in leaderboard


	alice_scores.forEach((score) => {
		let i = 0;
		while (i < leaderBoardUnique.length){
			if (leaderBoardUnique[i] <= score){
				// 100, 90, 80
				// 70, 80, 105
				console.log(i + 1)

			}
			i++
		}
	})

}

findRanking([100, 90, 90, 80] , [70, 80, 105])
