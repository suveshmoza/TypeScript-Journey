//* ide shows warning at the first place
//* no extra code is written

const sum = (a: number, b: number) => {
	console.log('Sum = ' + (a + b) + '\n');
};

sum(10, 2);
sum('10', 2);
sum('10', '10');
