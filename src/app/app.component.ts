import { Component } from '@angular/core';
import { Estudiante } from 'src/model/Estudiante';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Valor 1';
  textoPlaceholder = "Escribe algo aqui";
  imgSrc = "https://angular.io/assets/images/logos/angular/angular.png";
  texto="";
  estudianteObj!:Estudiante;
  listaEstudiantes:Estudiante[]=[] ;

  constructor() {
    //setInterval(() => this.title = "Nuevo valor", 3000);
    this.estudianteObj = new Estudiante('PEPE',23);
    this.listaEstudiantes.push(new Estudiante('PEPE1',32));
    this.listaEstudiantes.push(new Estudiante('JUAN',27));
    this.listaEstudiantes.push(new Estudiante('SAUL',23));
    this.listaEstudiantes.push(new Estudiante('TOÑO',29));
  }
  getSuma(numero1: number, numero2: number) {
    return numero1 + numero2;
  }
  cambiarTitulo() {
    this.title = this.texto;
  }
}
