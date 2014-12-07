function Game(){
	this.player
	this.currentFrame = []
	this.gameIsReady = []
};

Game.prototype.addPlayer = function(player) {
	this.player = player
};

Game.prototype.addSingleFrame = function(frame, pin){
	for(var i=0; i<10; i++){
		this.currentFrame.push(frame.fillFrame(new Pin))
	}
};

// Game.prototype.readyToPlay = function(frame, pin) {
// 	for(var i=0; i<10; i++){this.currentFrame.push(frame.fillFrame(pin))}
// }

