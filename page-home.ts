import { Component } from '@angular/core';

@Component({
  selector: 'app-page-home',
  standalone: false,
  templateUrl: './page-home.html',
  styleUrl: './page-home.css'
})
export class PageHome {
  telaAtual: string = 'form'; // valor inicial

  trocarTela(tela: string) {
    this.telaAtual = tela;
  }
}
