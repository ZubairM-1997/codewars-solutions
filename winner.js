class Fighter {
	constructor(name, health, damagePerAttack){
		this.name = name;
		this.health = health;
		this.damagePerAttack = damagePerAttack
		this.toString = function() {return this.name;}

	}
}

function declareWinner(fighter1, fighter2, firstAttacker) {

	while(firstAttacker){

		if (firstAttacker === fighter1){

			fighter2.health = fighter2.health - fighter1.damagePerAttack
			if(fighter2.health > 0){
				firstAttacker = fighter2
			} else {
				return fighter1.toString()
			}

		} else if (firstAttacker === fighter2){
			fighter1.health = fighter1.health - fighter2.damagePerAttack
			if (fighter1.health > 0){
				firstAttacker = fighter1
			} else {
				return fighter2.toString()
			}
		}

	}

  }