import { Component, inject} from '@angular/core';
import { User } from '../../_models/user';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrl: './users.component.css'
})
export class UsersComponent {
   //users:string[] = ['Abda', 'Baasa', 'Cadmiel', 'Dafne'];
   userSelecionado:User | undefined;
   userFom: FormGroup = new FormGroup({});
   private formBuilder = inject(FormBuilder);

   infoUserSelecionado(user:User){
    this.userSelecionado = user;
   }

   users: User[] = [
    {
      nome: 'Abda',
      idade: 25
    },
    {
      nome: 'Baasa',
      idade: 19
    },
    {
      nome: 'Cadmiel',
      idade: 45
    },
    {
      nome: 'Dafne',
      idade: 37
    }
  ];

}
