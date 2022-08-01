function addition(a: number, b: number): number {
	return a + b;
}

function multBy2(a: number): void {
	console.log(a * 2);
}

let fun: Function;

fun = addition;
console.log(fun(8, 8));
fun = multBy2;

// with type as Function we can set fun to any function
// without caring about its param or return type.
console.log(fun(8, 8));

// if we want our variable to work with function with given param types and
// return types we use function as types

let fun2: (a: number, b: number) => number;

fun2 = addition;
// now it
fun2 = multBy2;

console.log(fun2(8, 8));
