import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { ITeam } from '../interfaces/Team';
import { environment } from '../../environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class TeamService {

  apiUrl  = environment.baseUrl;
  httpclient = inject(HttpClient);

  constructor() { }

  getTeams(){
    return this.httpclient.get<ITeam[]>(this.apiUrl  +"Team");
  }
}
