import { Component, OnInit } from '@angular/core';
import { Lista } from './lista';

@Component({
  templateUrl: './curso.component.html'
})

export class CursoComponent implements OnInit {

  cursos: Lista[] = [];

  ngOnInit(): void {
    this.cursos = [
      {
        id: 1001,
        name: "Angular",
        price: 99.99,
        duration: 100
      },
      {
        id: 1002,
        name: "Java",
        price: 199.99,
        duration: 100
      },
      {
        id: 1003,
        name: "JavaScript",
        price: 49.99,
        duration: 50
      }
    ]
  }

}
