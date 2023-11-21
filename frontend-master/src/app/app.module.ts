import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTableModule } from '@angular/material/table';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ProfessorComponent } from './components/professor/professor.component';
import { AlocacaoComponent } from './components/alocacao/alocacao.component';
import { DisciplinaComponent } from './components/disciplina/disciplina.component';
import { CargaHorariaComponent } from './components/carga-horaria/carga-horaria.component';


@NgModule({
  declarations: [
    AppComponent,
    ProfessorComponent,
    AlocacaoComponent,
    DisciplinaComponent,
    CargaHorariaComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatTableModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
