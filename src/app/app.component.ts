import { Component,} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  //DataBiding: Caracteristica que comunica datos entre el TS y HTML de manera unidireccional y bidireccional

  //INTERPOLACIÓN : los datos viajan desde el componente hacia el DOM 

  //Declaro la Variable:
  nombre: string

  //creo constructor e inicializo la variable
  constructor(){
    this.nombre = 'Alejandro Bernal Castiblanco'
  }


 
 
  
}

//DATABINDING = Permite comunicar datos entre el archivo TS y HTML de forma unidireccional o bidireccional