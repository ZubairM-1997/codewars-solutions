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
			if(fighter2.health > 0){
				fighter2.health = fighter2.health - fighter1.damagePerAttack
				firstAttacker = fighter2
			} else {
				return fighter1
			}

		} else {
			if (fighter1.health > 0){
				fighter1.health = fighter1.health - fighter2.damagePerAttack
				firstAttacker = fighter1
			} else {
				return fighter2
			}
		}

	}

  }