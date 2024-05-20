import { Analyzer } from './Analyzer.js';
import { MatchesReader } from './MatchesReader.js';

const headers = [
  'date',
  'homeTeam',
  'awayTeam',
  'homeTeamGoals',
  'awayTeamGoals',
  'winner',
  'referee',
];

const reader = new MatchesReader('football.csv', headers);
reader.readFile();
const analyser = new Analyzer(reader.matches);
const totalManUnitedGoals = analyser.totalTeamGoalsScored('Man United');
console.log(totalManUnitedGoals);
const manUnitedWins = analyser.totalTeamWins('Man United');
console.log(manUnitedWins);
const manUnitedGoalsConceded = analyser.totalTeamGoalsConceded('Man United');
console.log(manUnitedGoalsConceded);
const manUnitedGoalDifference = analyser.teamGoalDifference('Man United');
console.log(manUnitedGoalDifference);
const manUnitedLosses = analyser.totalTeamLosses('Man United');
console.log(manUnitedLosses);
const manUnitedDraws = analyser.totalTeamDraws('Man United');
console.log(manUnitedDraws);
