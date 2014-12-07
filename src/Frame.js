function Frame() {
	this.activeFrame = []
};

Frame.prototype.fillFrame = function(pin){
	for(var i=0; i<10; i++){this.activeFrame.push(pin)}
};





