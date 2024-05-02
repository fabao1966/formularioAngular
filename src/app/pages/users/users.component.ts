import { Component, OnInit, inject} from '@angular/core';
import { User } from '../../_models/user';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrl: './users.component.css'
})
export class UsersComponent implements OnInit {
   //users:string[] = ['Abda', 'Baasa', 'Cadmiel', 'Dafne'];
   userSelecionado:User | undefined;
   userFom: FormGroup = new FormGroup({});
   private formBuilder = inject(FormBuilder);

   ngOnInit(): void {
       this.initializeForm();
   }

   initializeForm(){
    this.userFom = this.formBuilder.group({
      nome: ['', [Validators.required, Validators.maxLength(255)]],
      idade: [ '', [Validators.required, Validators.min(12), Validators.max(120)]]
    })
   }

   submitForm(){
      if (this.userFom.valid) {

        this.users.push(this.userFom.value);

        this.userFom.reset();
      }
   }

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
