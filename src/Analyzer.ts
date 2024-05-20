import { MatchType } from './types';

export class Analyzer {
  constructor(private matches: MatchType[]) {}

  totalTeamGoalsScored(team: string): number {
    let goals = 0;
    this.matches.map((match) => {
      if (match.homeTeam === team) {
        goals += match.homeTeamGoals;
      } else if (match.awayTeam === team) {
        goals += match.awayTeamGoals;
      }
    });
    return goals;
  }

  totalTeamGoalsConceded(team: string): number {
    let goalsConceded = 0;
    this.matches.map((match) => {
      if (match.homeTeam === team) {
        goalsConceded += match.awayTeamGoals;
      } else if (match.awayTeam === team) {
        goalsConceded += match.homeTeamGoals;
      }
    });
    return goalsConceded;
  }

  teamGoalDifference(team: string): number {
    return this.totalTeamGoalsScored(team) - this.totalTeamGoalsConceded(team);
  }

  totalTeamWins(team: string): number {
    let wins = 0;
    this.matches.map((match) => {
      if (
        match.homeTeam === team &&
        match.homeTeamGoals > match.awayTeamGoals
      ) {
        wins += 1;
      } else if (
        match.awayTeam === team &&
        match.awayTeamGoals > match.homeTeamGoals
      ) {
        wins += 1;
      }
    });
    return wins;
  }

  totalTeamLosses(team: string): number {
    let losses = 0;
    this.matches.map((match) => {
      if (
        match.homeTeam === team &&
        match.homeTeamGoals < match.awayTeamGoals
      ) {
        losses += 1;
      } else if (
        match.awayTeam === team &&
        match.awayTeamGoals < match.homeTeamGoals
      ) {
        losses += 1;
      }
    });
    return losses;
  }

  totalTeamDraws(team: string): number {
    let draws = 0;
    this.matches.map((match) => {
      if (
        match.homeTeam === team &&
        match.homeTeamGoals === match.awayTeamGoals
      ) {
        draws += 1;
      }
    });
    return draws;
  }
}
