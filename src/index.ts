import { CsvFileReader } from './CsvFileReader.js';

const headers = [
  'date',
  'homeTeam',
  'awayTeam',
  'homeTeamGoals',
  'awayTeamGoals',
  'winner',
  'referee',
];

const reader = new CsvFileReader('football.csv', headers);
reader.readFile();
reader.allMatches();
