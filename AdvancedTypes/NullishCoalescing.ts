const foo = null ?? 'default string';
console.log(foo);
//* expected output: "default string"

const baz = 0 ?? 42;
console.log(baz);
