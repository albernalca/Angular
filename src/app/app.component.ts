import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  //Declaro las propiedades del Componente
  nombre: string
  edad: number
  correo: string

  //Inicializo en el constructor las propiedades
  constructor(){
    this.nombre = 'Alejandro'
    this.edad = 41
    this.correo = 'abernalc@shd.gov.co' 
   }

  //ngOnInit Inicialización de propiedades o lógica del componente
  ngOnInit(): void {
    
  }

  //declaración del metodo del componente
  mostrarNombre(): string {
    return ` mi nombre es ${this.nombre} tengo ${this.edad} años y mi correo es ${this.correo}`
  }
  
}

//DATABINDING = Permite comunicar datos entre el archivo TS y HTML de forma unidireccional o bidireccional