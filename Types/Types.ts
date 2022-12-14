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

//* any Type

let strArray = ['hello', 'how', 'are'];
let anyArray: any[] = ['hello', 1, true];

//* Type alias

let a: number | string;
let b: number | string;

// instead of writing the types again and again
// we can declare them like variables using type

type test = number | string;
let c: test;
let d: test;
