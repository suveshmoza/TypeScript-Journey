// Separate combine function for different types
// Meaning extra code for different types

// function combine(a: number, b: number) {
// 	return a + b;
// }

// with UNION types we can work with differnt types
function combine(a: number | string, b: number | string) {
	let res: number | string;
	if (typeof a === 'number' && typeof b === 'number') {
		res = a + b;
	} else {
		res = a.toString() + b.toString();
	}
	return res;
}

console.log(combine(10, 12));
console.log(combine('New', 'Delhi'));
