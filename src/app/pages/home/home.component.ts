import { Component, OnInit, inject } from '@angular/core';
import { UserService } from '../../_services/user.service';
import { UserGit } from '../../_models/userGit';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent{
  private userService = inject(UserService);
  private toast = inject(ToastrService);
  user: UserGit | undefined;
  userneme:string = ''



    getGitUser(){
      this.userService
      .getGitUser(this.userneme)
      .subscribe((response:UserGit) => {
        this.user = response;
      },(error) => {
        this.toast.error(error.error.message);
      });
    }
}
