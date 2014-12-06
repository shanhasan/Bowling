describe("Frame", function() {

	var frame, pins

	beforeEach(function(){
		frame = new Frame
		totalPins = 10
	});

	it('is populated with 10 pins', function(){
		frame.fillFrame()
		expect(frame.activeFrame.length).toEqual(totalPins);
	});

	it('cannot have more than 10 pins', function(){
		expect(totalPins).toBeLessThan(11);
	});

	// it('can have less than 10 pins after a roll', function(){
				
	// });



	});