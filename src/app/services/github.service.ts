import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GithubService {
  private apiUrl = 'https://api.github.com';


  constructor(private http: HttpClient) { }

  getProjects(username: string) {
    return this.http.get(`${this.apiUrl}/users/${username}/repos`);
  }
}
