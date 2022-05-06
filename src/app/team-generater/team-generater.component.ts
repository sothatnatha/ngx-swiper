import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-team-generater',
  templateUrl: './team-generater.component.html',
  styleUrls: ['./team-generater.component.scss'],
})
export class TeamGeneraterComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  newMemberName = '';
  members: string[] = [];
  errorMessage = '';
  numberOfTeams = 0;

  teams: string[][] = [];

  onInputMember(member: string) {
    this.newMemberName = member;
  }

  addMember() {
    // it mean if it emty membername
    if (!this.newMemberName) {
      this.errorMessage = "Member name can't be empty!";
      return;
    } else {
      this.errorMessage = ''; // when it has member name errormessage is disappear
    }
    this.members.push(this.newMemberName);
    this.newMemberName = ''; // assinge empty value to input when clicked addMember
  }

  onNumberOfTeamInput(value: string) {
    this.numberOfTeams = Number(value);
  }
  generateTeams() {
    if (!this.numberOfTeams || this.numberOfTeams <= 0) {
      this.errorMessage = 'Invalid number of teams!';
      return; // throw an erorr! if condition true
    }

    if (this.members.length < this.numberOfTeams) {
      this.errorMessage = 'Not enough number of teams!';
      return;
    }

    this.errorMessage = '';
    const allMembers = [...this.members]; //spread operator

    while (allMembers.length) {
      for (let i = 0; i < this.numberOfTeams; i++) {
        const randomIndex = Math.floor(Math.random() * allMembers.length);
        // console.log(randomIndex);
        const member = allMembers.splice(randomIndex, 1)[0];
        if (!member) {
          break;
        }
        if (this.teams[i]) {
          this.teams[i].push(member);
        } else {
          this.teams[i] = [member];
        }
      }
    }
    this.members = [];
    this.numberOfTeams = 0;
  }
}
