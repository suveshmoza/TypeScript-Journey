const sum = (a, b) => {
	console.log('Sum = ' + (a + b) + '\n');
};

//* improved with proper type checking
//! extra code
const sumImproved = (a, b) => {
	if (typeof a === 'number' && typeof b === 'number') {
		console.log('Sum = : ' + (a + b) + '\n');
	} else {
		console.log('Sum = : ' + (+a + +b) + '\n');
	}
};

sum(10, 2); //outpus --> 12
sum('10', 2); // ouput --> 102
sum('10', '10'); //output --> 1010

sumImproved(10, 2); //outpus --> 12
sumImproved('10', '2'); // ouput --> 12
sumImproved('1', '2'); //output --> 3
