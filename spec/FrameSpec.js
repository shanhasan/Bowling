describe("Frame", function() {

	var frame, pin

	beforeEach(function(){
		frame = new Frame
		pin = new Pin
	});

	it('is populated with 10 pins', function(){
		frame.fill(pin)
		expect(frame.content.length).toEqual(10);
	});

	it('cannot have more than 10 pins', function(){
		expect(frame.content.length).toBeLessThan(11);
	});

	});