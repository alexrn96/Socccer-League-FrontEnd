import { Component, inject } from '@angular/core';
import { ITeam } from '../../interfaces/Team';
import { TeamService } from '../../services/team.service';
import {MatTableModule} from '@angular/material/table';

@Component({
  selector: 'app-team',
  standalone: true,
  imports: [MatTableModule],
  templateUrl: './team.component.html',
  styleUrl: './team.component.css'
})
export default class TeamComponent {
    teamService = inject(TeamService)
    teams:ITeam[] = [];

    //table angular material
    displayedColumns: string[] = ['id', 'name'];
    
    ngOnInit(){
        this.teamService.getTeams().subscribe(result =>{
         
          this.teams  = result;
          console.log(this.teams);
        })
    }
}
