import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { GithubService } from 'src/app/services/github.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent {
  projects: any[] = [];

  constructor(private githubService: GithubService,
    private router: Router) { }

  ngOnInit() {
    this.githubService.getProjects('Edwingaviria').subscribe(
      (data: any) => {
        this.projects = data;
        console.log(data);
      },
      (error: any) => {
        console.error(error);
      }
    );
  }

}
