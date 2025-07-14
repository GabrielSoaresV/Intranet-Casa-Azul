import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-button-form',
  standalone: false,
  templateUrl: './button-form.html',
  styleUrl: './button-form.css'
})
export class ButtonForm {
  @Output() trocarTela = new EventEmitter<string>();

  exibirForm() {
    this.trocarTela.emit('form');
  }
}
