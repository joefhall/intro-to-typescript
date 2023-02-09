// First let's define our interfaces and types
// Usually these would go in separate files if they're types we use more than once, and export/import them

interface Volunteer {
  name: string;
  skill: Skill;
}

type Skill = 'development' | 'testing' | 'userResearch';

// Here's a function that will use them
// It takes a team and a skill that's needed, and says "does the team have this skill?"

const teamHasNecessarySkill = (team: Volunteer[], skillNeeded: Skill): boolean => {
  // You could write this code a better way -- this is just a simple example
  for (const teamMember of team) {
    if (teamMember.skill === skillNeeded) return true;
  }

  return false;
};

// Some data to try it out with

const team1 = [
  {
    name: 'Nadia',
    skill: 'development',
  },
  {
    name: 'Mo',
    skill: 'userResearch',
  },
] as Volunteer[];

const team2 = [
  {
    name: 'Daniel',
    skill: 'development',
  },
  {
    name: 'Rachel',
    skill: 'testing',
  },
] as Volunteer[];

// Let's run our function

console.log('Does team 1 have the userResearch skill?', teamHasNecessarySkill(team1, 'userResearch'));
console.log('Does team 2 have the userResearch skill?', teamHasNecessarySkill(team2, 'userResearch'));
