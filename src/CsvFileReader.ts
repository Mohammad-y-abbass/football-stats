import { MarkOptions } from 'perf_hooks';
import { MatchType } from './types';
import fs from 'fs';

export class CsvFileReader {
  public results: MatchType[] = [];

  constructor(private _filePath: string, private headers: string[]) {}

  readFile(): void {
    const data = fs.readFileSync(this._filePath, 'utf8');
    const rows = data.split('\n');
    rows.forEach((row: string) => {
      row.split(',');
      let match = {} as MatchType;
      this.headers.forEach((header, index) => {
        match = { ...match, [header]: row.split(',')[index] };
      });
      this.results.push(match);
    });
  }

  allMatches(): void {
    this.results.forEach((match) => {
      console.log(match);
    });
  }
}
