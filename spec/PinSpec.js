
describe("Pin", function(){
	
	var pin;

	beforeEach(function(){
		pin = new Pin();
	});

	it('is not knocked down at the beginning of the game', function(){
		expect(pin.knockedDown).toBe(false)
	})

	it('can be knocked down', function(){
		pin.isKnockedDown()
		expect(pin.knockedDown).toBe(true)
	})

});
