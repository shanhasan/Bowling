function Player(name, score, roll) {
	this.name = name;
	this.score = 0;
	this.roll = 2	
};

Player.prototype.rolls = function(){
	this.roll -= 1	
};

Player.prototype.totalPoints = function(){
	return this.score;
};





