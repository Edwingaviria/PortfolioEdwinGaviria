import { Component } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent {
  list = [
    {
      tecnology: 'Angular',
      progress: 90,
      icon: 'angular',
      color: 'red-500',
    },
    {
      tecnology: 'Flutter',
      progress: 80,
      icon: 'flutter',
      color: 'blue-500',
    },
    {
      tecnology: 'NodeJS',
      progress: 85,
      icon: 'nodejs',
      color: 'green-600'
    },
    {
      tecnology: 'MySQL',
      progress: 90,
      icon: 'mysql',
      color: 'green-400',
    },
    {
      tecnology: 'Java',
      progress: 83,
      icon: 'java',
      color: 'red-500'
    },
    {
      tecnology: 'Html5',
      progress: 95,
      icon: 'html',
      color: 'yellow-600'
    },
    {
      tecnology: 'Css3',
      progress: 80,
      icon: 'css',
      color: 'cyan-500'
    },
    {
      tecnology: 'JavaScript',
      progress: 92,
      icon: 'javascript',
      color: 'green-400'
    }
  ]
}
