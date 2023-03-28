import { Component,} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

texto = 'Esto es Event biding'
 
cambiarTexto(): void{
  this.texto = "En el Click cambia de texto por Alejandro"
}

 
 
  
}

