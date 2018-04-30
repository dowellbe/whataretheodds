// Import code to be tested
const odds = require ("./wato");

describe(" A whataretheodds program", () => {
	it("should count from 1 to [some arbitrary number]", () => {
		expect(odds.count(5)).toEqual([1,2,3,4,5]);
		expect(odds.count(10)).toEqual([1, 2 ,3, 4, 5, 6, 7, 8, 9, 10]);
	});

	it("can get random integer", () => {
		expect(odds.count(5)). toEqual([1,2,3,4,5]);
		expect(odds.count(10)).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
	});

});