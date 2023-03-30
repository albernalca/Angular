import { Component,} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  //databinding
  titulo: string = 'Listado Estudiantes';
  
  // se crea un array
  listaEstudiantes: any[]=[
    {id:1, nombre: 'Alejandro Bernal Castiblanco', estado:'Casado'},
    {id:2, nombre: 'Leidy Magaly Bermudez Buitrago', estado:'Casada'},
    {id:3, nombre: 'Edwin Bernal Castiblanco', estado:'Soltero'}
  ]

  columnas: any[] = ['id', 'nombre', 'estado'];

  
}

