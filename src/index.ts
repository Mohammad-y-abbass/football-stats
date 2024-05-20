import { CsvFileReader } from './CsvFileReader.js';

const headers = [
  'Date',
  'HomeTeam',
  'AwayTeam',
  'FTHG',
  'FTAG',
  'FTR',
  'Referee',
];

const reader = new CsvFileReader('football.csv', headers);
reader.readFile();
reader.allMatches();
