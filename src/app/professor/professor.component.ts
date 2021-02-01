import { Component, OnInit } from '@angular/core';
import { Lista } from './lista';

@Component({
  templateUrl: './professor.component.html'
})

export class ProfessorComponent implements OnInit {

  professor: Lista[] = [];

  ngOnInit(): void {
    this.professor = [
      {
        id: 1001,
        name: "Maria Joaquina",
        disciplina: "Angular"
      },
      {
        id: 1002,
        name: "José Maria",
        disciplina: "Java"
      },
      {
        id: 1003,
        name: "Josefa Aquino",
        disciplina: "JavaScript"
      }
    ]
  }

}
