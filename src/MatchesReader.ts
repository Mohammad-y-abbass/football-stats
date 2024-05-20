import { MatchType, headType } from './types.js';
import fs from 'fs';
import { stringToDate } from './utils.js';

export class MatchesReader {
  public matches: MatchType[] = [];

  constructor(private _filePath: string, private headers: string[]) {}

  readFile(): void {
    const data = fs.readFileSync(this._filePath, 'utf8');
    const rows = data.split('\n');

    rows.forEach((row: string) => {
      const columns = row.split(',');
      let match = {} as MatchType;

      this.headers.forEach((header, index) => {
        let value: headType = columns[index];
        if (header === 'date') {
          value = stringToDate(value);
        } else if (header === 'homeTeamGoals' || header === 'awayTeamGoals') {
          value = parseInt(value);
        }
        match = { ...match, [header]: value };
      });

      this.matches.push(match);
    });
  }

  allMatches(): void {
    this.matches.forEach((match) => {
      console.log(match);
    });
  }
}
