// You should define the return type of every function
// and often you have to

// Here we don't have to as Typescript knows we're returning a string -- but it's better to

const removeFullStops = (someText: string): string => {
  return someText.replaceAll('.', '');
};

// Here -- as in most cases -- we explicitly tell Typescript (and ourselves) what type the function returns

type Town = string | undefined;

const getAllVolunteerLocations = (): Town[] => {
  // Do some things to get volunteer locations

  // Return the results
  return ['Dundee', 'Edinburgh', 'Glasgow', 'Inverness'];
};
