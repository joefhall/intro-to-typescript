// Unions allow you to specify that a variable or type can be one thing or another thing (as many as you want)

// Use it for a variable

// Maybe someone filled in a form where the postcode was optional
let postcode: string | undefined;
// console.log('What is length of postcode? (1)', postcode.length); // We'll get an error if we don't check first whether postcode is undefined
console.log('What is length of postcode? (2)', postcode?.length); // This will work though
console.log('What is length of postcode? (3)', postcode ? postcode.length : 'No postcode set'); // So will this

// Use it for a type
type Town = string | undefined;

const getAllVolunteerLocations = (): Town[] => {
  // Do some things to get volunteer locations

  // Return the results
  return ['Dundee', 'Edinburgh', 'Glasgow', 'Inverness'];
};
