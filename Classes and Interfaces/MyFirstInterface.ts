interface addTwoNumbers {
	(a: number, b: number): number;
}

let add: addTwoNumbers;

add = (n1: number, n2: number) => {
	return n1 + n2;
};

interface Named {
	name: string;
	optionalName?: string;
}

interface Age {
	age: number;
}

interface Data extends Age, Named {
	printAge(): void;
}

class Information implements Data {
	name: string;
	age: number;

	constructor(name: string, age: number) {
		this.name = name;
		this.age = age;
	}

	printAge() {
		console.log(this.age);
	}
}

interface Person {
	name: string;
	age: number;

	printAge(): void;
}

let user1: Person;
user1 = {
	name: 'XYZ',
	age: 20,
	printAge() {
		console.log(this.age);
	},
};

user1.printAge();
