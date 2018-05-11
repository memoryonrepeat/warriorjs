class Player {
  playTurn(warrior) {
    if (!this.prevHealth){
      this.prevHealth = warrior.health()
    }
  	if (warrior.feel().isEmpty()){
  		if (warrior.health()<20){
        if (this.prevHealth <= warrior.health()){
          this.prevHealth = warrior.health()
          warrior.rest()
        }
        else{
          this.prevHealth = warrior.health()
          warrior.walk()
        }
  		}
  		else{
        this.prevHealth = warrior.health()
  			warrior.walk()
  		}
  	}
    else if (warrior.feel().isCaptive()){
      this.prevHealth = warrior.health()
      warrior.rescue()
    }
  	else{
      this.prevHealth = warrior.health()
  		warrior.attack()
  	}
  }
}
