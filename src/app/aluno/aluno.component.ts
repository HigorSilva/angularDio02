import { Component, OnInit } from '@angular/core';
import { Lista } from './lista';

@Component({
  templateUrl: './aluno.component.html',
})

export class AlunoComponent implements OnInit {

  aluno: Lista[] = [];

  ngOnInit(): void {
    this.aluno = [
      {
        id: 1001,
        name: "Bruno Resende",
        curso: "Angular"
      },
      {
        id: 1002,
        name: "Regina Antunes",
        curso: "Java"
      },
      {
        id: 1003,
        name: "Marta Tavares",
        curso: "JavaScript"
      }
    ]
  }

}

