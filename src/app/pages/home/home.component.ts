import { Component, OnInit, inject } from '@angular/core';
import { UserService } from '../../_services/user.service';
import { User } from '../../_models/user';
import { UserGit } from '../../_models/userGit';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit{
  private userService = inject(UserService);
  user: UserGit | undefined;

    ngOnInit(){
      this.getGitUser();
    }

    getGitUser(){
      this.userService.getGitUser('facebook').subscribe((response:UserGit) => {
        this.user = response;
      });
    }
}
