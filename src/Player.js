function Player(name, score) {
	this.name = name;
	this.score = 0;
};

// Player.prototype.rolls = function(){
// 	this.roll = 0;	
// };

Player.prototype.totalPoints = function(){
	return this.score;
};

Player.prototype.roll = function(){

};



