import { Component, OnInit, inject } from '@angular/core';
import { UserService } from '../../_services/user.service';
import { User } from '../../_models/user';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit{
  private userService = inject(UserService);

    ngOnInit(){
      this.getGitUser();
    }

    getGitUser(){
      this.userService.getGitUser('facebook').subscribe((response:any) => {
        console.log(response);
      });
    }
}
