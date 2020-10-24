import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss'],
})
export class UserComponent implements OnInit {
  usersArray = [];
  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.userService.getUserFromAPI().subscribe((response) => {
      this.usersArray = response.results;
      console.log(this.usersArray);
    });
  }
}
