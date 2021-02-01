import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  tituloASerUSado = 'Seja bem-vindo! =)';

  constructor() {
    
  }

  onValorAtualizadoNoContador(novoValor) {
    console.log('onValorAtualizadoNoContador', novoValor)
  }
  
}
