// You're going on a trip with some students and its up to you to keep track of how much money each Student has
// Each student has some fives, tens & twenties
// return the student with the most money
// if every student has the same amount, return "all"



class Student {
	constructor(name, fives, tens, twenties){
		this.name = name;
		this.fives = fives;
		this.tens = tens;
		this.twenties = twenties;
	}
}

function mostMoney(students){
	if(students.length <= 0){
		return null;
	} else if (students.length === 1){
    return students[0]

  }

	let firstStudent = students[0]
	let mostMoney = (firstStudent.fives * 5) + (firstStudent.tens * 10) + (firstStudent.twenties * 20)
	let studentMost = firstStudent;

	let sameCount = 0;

	for (let i = 1; i < students.length; i++){
		let student = students[i]
		let totalMoney = (student.fives * 5) + (student.tens * 10) + (student.twenties * 20)

		if(totalMoney > mostMoney){
			mostMoney = totalMoney
			studentMost = student

		}else if (totalMoney === mostMoney){
			sameCount++
		}

	}

	if (sameCount === students.length - 1){
		return "all"
	} else {
		return studentMost
	}

}