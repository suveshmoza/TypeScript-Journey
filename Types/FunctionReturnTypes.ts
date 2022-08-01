function diff(a: number, b: number) {
	return a - b;
}

//* return type

// ts knows the output of this function will be a number
// if we change the return type to any other than the type
// of the returned value ts shows warning.
function diff2(a: number, b: number) {
	return a - b;
}

// return type as string
function diff3(a: number, b: number): string {
	// return a - b;
	return (a - b).toString();
}

// return type as void
function diff4(a: number, b: number): void {
	console.log(a - b);
}

// return type as undefined
function diff5(a: number, b: number): undefined {
	console.log(a - b);
	return;
}

//! void !== undefined
