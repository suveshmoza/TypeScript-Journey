function addNumbers(a: number, b: number): number {
	return a + b;
}

function addStrings(a: string, b: string): string {
	return a + b;
}

function add(a: number | string, b: number | string): number | string {
	if (typeof a === 'number' && typeof b === 'number') return a + b;

	if (typeof a === 'string' && typeof b === 'string') return a + b;
}
