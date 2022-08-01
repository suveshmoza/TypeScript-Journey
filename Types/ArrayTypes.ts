const test = {
	name: 'Test',
	number: 1545,
	fruits: ['apple', 'orange', 'mango'],
};

console.log(test.fruits);

let numbers: number[];
numbers = [1, 2, 3];

// Type inference knows that test.fruits is an array of
// strings so ultimately fruit will be a string so it shows all the
// functions available to it
for (const fruit of test.fruits) {
	console.log(fruit.toLowerCase);
}
