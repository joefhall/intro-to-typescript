// You should define the return type of every function
// and often you have to

// Here we don't have to as Typescript knows we're returning a string -- but it's better to

const removeFullStops = (someText: string): string => {
  return someText.replaceAll('.', '');
};
