import { Component, EventEmitter, Input, Output } from '@angular/core';
import { User } from '../../_models/user';

@Component({
  selector: 'app-usercard',
  templateUrl: './usercard.component.html',
  styleUrl: './usercard.component.css'
})
export class UsercardComponent {

  @Input() user:User = {
    nome: '',
    idade: 0
  };

  @Output() userInfoEmiter = new EventEmitter<User>();

  retornarDados(){
    this.userInfoEmiter.emit(this.user);
  }

}
