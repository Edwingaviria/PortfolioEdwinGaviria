import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {
  educations: any = [
    {
      tittle: 'INGENIERO DE SISTEMAS',
      institute: 'Fundación Universitaria de San Gil - UNISANGIL',
      description:
        'Ingeniero de software que apoye las actividades de análisis, diseño, construcción y mantenimiento de soluciones de software para el soporte de los procesos de una organización.',
      initDate: 'August 2018',
      finishDate: 'March 2023',
      logo: 'assets/unisangil.png',
    },
    {
      tittle:
        'PROGRAMACIÓN CON ÉNFASIS EN APLICACIONES WEB',
      institute: 'Universidad Nacional de Colombia',
      description:
        'Tecnologías de la información y las comunicaciones y la Universidad Nacional de Colombia.',
      initDate: 'Febrero 2022',
      finishDate: 'Diciembre 2022',
      logo: 'assets/unal.png',
    },
  ];
  experiences = [
    {
      tittle: 'DESARROLLADOR WEB',
      institute: 'Xpertus Labs S.A',
      description:
        'Prestación de servicios profesionales para el análisis, diseño, desarrollo, documentación e implantación de Software en los diferentes proyectos de desarrollo que sean asignados en el tiempo de ejecución.',
      initDate: 'February 2021',
      finishDate: 'December 2022',
      logo: 'assets/xpertus.png',
    },
    {
      tittle:
        'INGENIERO DE SISTEMAS',
      institute: 'GOBERNACIÓN DE CASANARE',
      description:
        'Desarrollo - Actualización página web - Base de datos - Desarrollo de un ChatBot - Administración del sistema de información.',
      initDate: 'July 2021',
      finishDate: 'December 2021',
      logo: 'assets/gober.png',
    },
  ];
}
