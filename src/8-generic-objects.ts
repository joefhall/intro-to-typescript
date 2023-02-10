// Generally it's best to use an interface for objects whenever you can -- define what properties it should have and what types they are

// But sometimes you do just need a generic object
// e.g. something like this

const objectICantFullyPredictInAdvance = {
  'Donations UK 2022': 35,
  'New Government Petition 2a': 'completed',
  'Regular gifts 3a': 48,
  // etc
};

function doSomethingWithObject(myObject: { [key: string]: number | string }) {
  // do something here
}

// doSomethingWithObject(objectICantFullyPredictInAdvance); // this should work
