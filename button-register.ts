import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-button-register',
  standalone: false,
  templateUrl: './button-register.html',
  styleUrl: './button-register.css'
})
export class ButtonRegister {
  @Output() trocarTela = new EventEmitter<string>();

  exibirRegister() {
    this.trocarTela.emit('register');
  }
}

