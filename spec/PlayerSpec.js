describe("Player", function() {

	var player, roll, pins

	beforeEach(function(){
		player = new Player('Giorgia', 0);
		roll = 2
		score = 0
		pin = new Pin
	});

	it('has a name', function(){
		expect(player.name).toEqual('Giorgia')
	})

	it('should always have a name', function(){
		expect(player.name).not.toBe(null)
	})
	
	it('has an initial score of zero', function(){
		expect(player.score).toEqual(0);
	})
	
	it('can roll a max of 2 times', function(){
		expect(player.roll).toBe(2);
	})	

	it('can have less than 2 rolls', function(){
		expect(player.roll).toEqual(2)
		player.rolls()
		expect(player.roll).toEqual(1);
	})

	it('can knocked down the pins after a roll', function(){
		expect(pin.knockedDown).toBe(false)
		player.rolls()
		pin.isKnockedDown()
		expect(pin.knockedDown).toBe(true)
	})

	
});

// toBeLessThan(3)