import { Component, OnInit, inject } from '@angular/core';
import { UserInterface } from './user';
import { UsersService } from './users.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent implements OnInit {
  title = 'angular-questions';
  userService = inject(UsersService);
  users: UserInterface[]=[];
  ngOnInit(){
    this.getUsers();
  }

  getUsers(){
    this.userService.getUsers().subscribe((res) => {
      this.users = res;
    });
  }
}
