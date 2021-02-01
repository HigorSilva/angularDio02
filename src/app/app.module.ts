import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { AlunoComponent } from './aluno/aluno.component';
import { CursoComponent } from './curso/curso.component';
import { ProfessorComponent } from './professor/professor.component';

@NgModule({
  declarations: [
    AppComponent,
    AlunoComponent,
    CursoComponent,
    ProfessorComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      {
        path: '', component: AppComponent
      },
      {
        path: 'curso', component: CursoComponent
      },
      {
        path: 'aluno', component: AlunoComponent
      },
      {
        path: 'professor', component: ProfessorComponent
      }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
