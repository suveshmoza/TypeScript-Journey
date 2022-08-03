function doSomething(n1: number, n2: number, cb: (n3: number) => number) {
	const sum = n1 + n2;
	cb(sum);
}

doSomething(8, 8, (res) => {
	console.log(res);
	return res;
});
