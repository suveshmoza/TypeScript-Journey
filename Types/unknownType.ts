let unknownType: unknown;
let stringType: string;

unknownType = 1;
unknownType = 'Hello';
stringType = unknownType;

// with any ts does care about type
let anyType: any;
let string: string;

unknownAny = 1;
unknownAny = 'Hello';
string = unknownAny;
