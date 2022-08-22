function merge<T, U>(objA: T, objB: U) {
	return Object.assign(objA, objB);
}

const mergedObj = merge({ name: 'Mac' }, { age: 30 });
console.log(mergedObj.name);
