const add = (a: number, b: number, flag: boolean, str: string) => {
	const res = a + b;
	if (flag) {
		console.log(str + res);
	} else {
		return res;
	}
};

// Due to Type inference we don't have to
// explicitly define the type below
const num1 = 5;
const num2 = 10.5;
const flag = true;
const str = 'Result = ';

// Here we have to define the type
// because the TS doesn't know to what value
// will be assigned but it will show error when
// the value isn't a number
let num3: number;

add(num1, num2, flag, str);

//* Object Types

const person: {
	name: string;
	age: number;
} = {
	name: 'Lorem Ipsum',
	age: 25,
};

console.log(person.name);

const person2 = {
	name: 'Lorem2 Ipsum2',
	age: 25,
};

console.log(person2.name);

//* Array Types

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

//* Tuples

let testTuple: [number, string] = [2, 'gamer'];
testTuple.push('student');
testTuple[0] = 3;
// Tuples have fixed length so shows warning
testTuple = [2, 'gamer', 'student'];

//* ENUM

enum Role {
	ADMIN,
	READ_ONLY,
	AUTHOR,
}

const testEnum = {
	role: Role.READ_ONLY,
};

if (testEnum.role === Role.READ_ONLY) {
	console.log('Role is Read Only');
}

//* any Type

let strArray = ['hello', 'how', 'are'];
let anyArray: any[] = ['hello', 1, true];

//* UNION types

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
