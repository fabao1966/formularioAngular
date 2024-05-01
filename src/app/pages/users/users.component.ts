import { Component} from '@angular/core';
import { User } from '../../_models/user';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrl: './users.component.css'
})
export class UsersComponent {
   //users:string[] = ['Abda', 'Baasa', 'Cadmiel', 'Dafne'];

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
