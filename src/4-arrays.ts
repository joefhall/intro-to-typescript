// This isn't good practice, because it could be an array of anything
const myArray = [];

// This is better
const team = [] as string[];
team.push('Nadia');
// team.push(1); // This won't work
// team.push(true); // Nor will this

// An array of numbers
const teamAges = [] as number[];
teamAges.push(39);
// teamAges.push('Forty-five'); // This won't work
