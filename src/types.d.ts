export interface MatchType {
  date: Date;
  homeTeam: string;
  awayTeam: string;
  homeTeamGoals: number;
  awayTeamGoals: number;
  matchResult: string;
  referee: string;
}

export type headType = Date | string | number;
