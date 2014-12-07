describe('Game', function(){

	var game, player, frameFull, pin;

	beforeEach(function(){
		game = new Game
		player = new Player
		frame = new Frame
		pin = new Pin
	});

	it('must have a player', function(){
		game.addPlayer(player) 
		expect(game.player).not.toEqual(this.player);
	})

	it('cannot have more than a player', function(){

	})

	it('after filled, it will have 10 frames', function(){
		frame.fill(pin)
		game.fillGame(frameFull)
		expect(game.frames.length).toBe(10)	
	})


	




});

// Strikes:

// The player has a strike if he knocks down all 10 pins
// with the first roll in a frame. 
// The frame ends immediately (since there are no pins 
// left for a second roll). The bonus for that frame is 
// the number of pins knocked down by the next two rolls. 
// That would be the next frame, unless the player rolls 
// another strike.

// Spares:

// The player has a spare if the knocks down all 10 pins
// with the two rolls of a frame. The bonus for that frame
//  is the number of pins knocked down by the next roll
//   (first roll of next frame).

// 10th frame:

// If the player rolls a strike or spare in the
//  10th frame they can roll the additional balls
// for the bonus. But they can never roll more 
// 	than 3 balls in the 10th frame. The additional 
// rolls only count for the bonus not for the regular 
// frame count.

