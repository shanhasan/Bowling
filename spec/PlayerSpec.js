describe("Player", function() {

	var player, roll

	beforeEach(function(){
		player = new Player('Giorgia', 0);
		roll = 2
		score = 0
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
		expect(roll).toBe(2);
	})	

	
});


// toBeLessThan(3)