// In some cases Typescript implicitly works out the type
let someText1 = 'blah blah 1';

// Explicitly set type - one way
const someText2: string = 'blah blah 2';

// Explicitly set type - another way
const someText3 = 'blah blah 3' as string;

// If you don't set the variable's value initially, you have to tell Typescript what type it is
let something: number;
