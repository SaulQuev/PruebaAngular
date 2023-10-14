import { Component } from '@angular/core';
import { Solicitud } from 'src/model/Solicitud';

@Component({
  selector: 'app-lista-solicitudes',
  templateUrl: './lista-solicitudes.component.html',
  styleUrls: ['./lista-solicitudes.component.css']
})
export class ListaSolicitudesComponent {
  public listaSolicitudes: Solicitud[]=[];
  constructor(){
    this.listaSolicitudes.push(new Solicitud(1,'Solicitud1','Descripcion1',1));
    this.listaSolicitudes.push(new Solicitud(2,'Solicitud2','Descripcion2',1));
    this.listaSolicitudes.push(new Solicitud(3,'Solicitud3','Descripcion3',1));
    this.listaSolicitudes.push(new Solicitud(4,'Solicitud4','Descripcion4',1));
    this.listaSolicitudes.push(new Solicitud(5,'Solicitud5','Descripcion5',1));
    this.listaSolicitudes.push(new Solicitud(6,'Solicitud6','Descripcion6',1));
    this.listaSolicitudes.push(new Solicitud(7,'Solicitud7','Descripcion7',1));
    this.listaSolicitudes.push(new Solicitud(8,'Solicitud8','Descripcion8',1));
    this.listaSolicitudes.push(new Solicitud(9,'Solicitud9','Descripcion9',1));

  }
}
