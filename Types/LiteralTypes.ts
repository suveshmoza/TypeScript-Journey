// A literal is a notation for representing a fixed value in the source code.
// For Example, below currentStatus can have values only active and inactives

let currentStatus: 'active' | 'inactive';

currentStatus = 'active';
currentStatus = 'inactive';

// shows warning
currentStatus = 'rest';
