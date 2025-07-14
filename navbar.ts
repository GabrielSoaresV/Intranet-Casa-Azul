import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-navbar',
  standalone: false,
  templateUrl: './navbar.html',
  styleUrls: ['./navbar.css']
})
export class Navbar {
  @Output() trocarTela = new EventEmitter<string>();

  trocarParaForm() {
    this.trocarTela.emit('form');
  }

  trocarParaRegister() {
    this.trocarTela.emit('register');
  }
}
