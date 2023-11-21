import { AlocacaoComponent } from './components/alocacao/alocacao.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfessorComponent } from './components/professor/professor.component';
import { CargaHorariaComponent } from './components/carga-horaria/carga-horaria.component';

const routes: Routes = [
  { path: 'professor', component: ProfessorComponent },
  { path: 'alocacao', component: AlocacaoComponent },
  { path: 'cargaHoraria', component: CargaHorariaComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
