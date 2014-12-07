function Game(){
	this.player
	this.frames = []
	this.currentFrame
};

Game.prototype.addPlayer = function(player) {
	if (typeof this.player == 'undefined'){
		this.player = player}
};

Game.prototype.fillGame = function(frameFull){
	for(var i=0; i<10; i++){
		this.frames.push(frameFull)}
};

Game.prototype.activeFrame = function(){
	var firstRound = 1
	return this.frames.indexOf(this.currentFrame) + firstRound
};

