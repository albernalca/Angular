import { Component,} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  //DataBiding: Caracteristica que comunica datos entre el TS y HTML de manera unidireccional y bidireccional

  //INTERPOLACIÓN : los datos viajan desde el componente hacia el DOM 

  //Declaro la Variable asignando un valor:
  nombre: string = 'Alejandro'

  //creo constructor usutizo una función interval de JS con la función flecha ()=>
  constructor(){
    setInterval( ()=> this.nombre='Juan Manuel',3000)
  }

  //creo un metodo y recibe 2 parámetros de tipo number
  getSuma(numero1:number, numero2:number){
    return numero1 + numero2
  }

 
 
  
}

//DATABINDING = Permite comunicar datos entre el archivo TS y HTML de forma unidireccional o bidireccional