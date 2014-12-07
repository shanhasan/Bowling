function Game(){
	this.player
	this.frames = []
	// this.gameIsReady = []
};

Game.prototype.addPlayer = function(player) {
	this.player = player
};

Game.prototype.fillGame = function(frameFull){
	for(var i=0; i<10; i++){
		this.frames.push(frameFull)
	}
};

// Game.prototype.readyToPlay = function(frame, pin) {
// // 	for(var i=0; i<10; i++){ this.gameIsReady.push(addSingleFrame(frame, pin)}
// };