import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  standalone: false
})
export class App {
  telaAtual = 'login';

  trocarPage(novaPage: string) {
    this.telaAtual = novaPage;
  }
}
