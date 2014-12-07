describe("Frame", function() {

	var frame, pin, totalPins

	beforeEach(function(){
		frame = new Frame
		pin = new Pin
	});

	it('is populated with 10 pins', function(){
		frame.fillFrame(pin)
		expect(frame.activeFrame.length).toEqual(10);
	});

	it('cannot have more than 10 pins', function(){
		expect(totalPins).toBeLessThan(11);
	});

	});