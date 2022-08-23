//* A Decorator is a special kind of declaration that can be applied to
//* classes, methods, accessor, property, or parameter. Decorators are
//* simply functions that are prefixed @expression symbol, where expression
//* must evaluate to a function that will be called at runtime with
//*  information about the decorated declaration.

function Logger(logString: string) {
	return function (constructor: Function) {
		console.log(logString);
		console.log(constructor);
	};
}

function WithTemplate(template: string, hookId: string) {
	return function (_: Function) {
		const hookEl = document.getElementById(hookId);
		if (hookEl) {
			hookEl.innerHTML = template;
		}
	};
}

@Logger('Logging - Person')
class Person {
	name = 'Tom';
	constructor() {
		console.log('Creating a person object');
	}
}

const person1 = new Person();
console.log(person1);
