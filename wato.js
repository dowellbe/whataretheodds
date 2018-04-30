// A function to generate a random number between 1 and 100
//function player(min, max) {
//	return Math.floor(Math.random()*(max-min)+min);

//console.log(player(1, 100));

//What are the odds
// Returns a random number between min (inclusive) and max (exclusive)
const count = x => {
	let output = [];
	for (let i = 1; i <= x; i += 1){
		output.push(i)
	}
	return output;
};

const oddscount = x => x

function getRandomArbitrary(min,max) {
	return Math.random() * (max -min) + min;
}

/**
 * Returns a random integer between min (inclusive) and max (inclusive)
 * Using Math.round() will give you a non-uniform distribution.
 */

function getRandomInt(min, max) {
	return Math.floor(Math.random() * (max - min + 1)) + min; 
}

function getRandomInt(max) {
	return Math.floor(Math.random() * Math.floor(max));
}

console.log(getRandomInt(67));

module.exports = {
	count,
	oddscount, 
	getRandomArbitrary,
	getRandomInt

};