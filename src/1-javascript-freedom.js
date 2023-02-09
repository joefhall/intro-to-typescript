let people = 'A group of volunteers';
console.log('What type is people? (1)', Array.isArray(people) ? 'array' : typeof people);

people = 5;
console.log('What type is people? (2)', Array.isArray(people) ? 'array' : typeof people);

people = [ 'Nadia', 'Daniel', 'Mo' ];
console.log('What type is people? (3)', Array.isArray(people) ? 'array' : typeof people);

people = {
  researcher: 'Nadia',
  designer: 'Daniel',
  tester: 'Mo',
};
console.log('What type is people? (4)', Array.isArray(people) ? 'array' : typeof people);

people = false;
console.log('What type is people? (5)', Array.isArray(people) ? 'array' : typeof people);
