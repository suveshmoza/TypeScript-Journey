let input = document.querySelector('input["type="text"]');
//! Compile Eror since return type is Element type which doesnt have a value property
console.log(input.value);

let input2 = document.querySelector('input[type="text"]') as HTMLInputElement;
console.log(input2.value);

let input3 = <HTMLInputElement>document.querySelector('input[type="text"]');
console.log(input3.value);
