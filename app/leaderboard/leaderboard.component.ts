import { Component, Input, OnInit } from "@angular/core";

@Component({
  selector: 'app-leaderboard',
  templateUrl: './leaderboard.component.html',
  styleUrls: ['./leaderboard.component.css']
})
export class LeaderboardComponent implements OnInit {
  @Input() leaderboard: { score: number; name: string }[] = [];

  constructor() { }

  ngOnInit(): void {
    // this.leaderboard.sort((score1, score2) => score1.score > score2.score ? -1: 1);
  }

}
