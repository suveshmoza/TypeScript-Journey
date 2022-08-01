// A tuple type is another sort of Array type that knows exactly
//  how many elements it contains, and exactly which types it
// contains at specific positions.

let testTuple: [number, string] = [2, 'gamer'];
testTuple.push('student');
testTuple[0] = 3;
// Tuples have fixed length so shows warning
testTuple = [2, 'gamer', 'student'];
