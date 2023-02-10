// Unions allow you to specify that a variable or type can be one thing or another thing (as many as you want)

// Use it for a variable

// Maybe someone filled in a form where the postcode was optional
let postcode: string | undefined;
// console.log('What is length of postcode? (1)', postcode.length); // We'll get an error if we don't check first whether postcode is undefined
console.log('What is length of postcode? (2)', postcode?.length); // This will work though
console.log('What is length of postcode? (3)', postcode ? postcode.length : 'No postcode set'); // So will this

// Maybe we're getting data in from elsewhere and we don't know what type it will be
let ageFromWebForm: string | number;

// Maybe we only want to allow a set list of choices
let programmingLanguage: 'javascript' | 'python' | 'typescript';

// Use it for a type
type ProgrammingLanguage = 'javascript' | 'python' | 'typescript';

const bestLanguage: ProgrammingLanguage = 'typescript';
