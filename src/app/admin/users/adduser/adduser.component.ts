import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { User } from 'src/app/classes/user';
import { HttpClientService } from 'src/app/service/http-client.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-adduser',
  templateUrl: './adduser.component.html',
  styleUrls: ['./adduser.component.css']
})
export class AdduserComponent implements OnInit {
  @Input()
  public user: User;

  @Output()
  userAddedEvent = new EventEmitter();

  newUser: User;
  message: string;
  password: string;
  constructor(private httpClientService: HttpClientService,
              private router: Router) { }

  ngOnInit() {
   // this.newUser = Object.assign({}, this.user);
  }
  addUser() {
    this.httpClientService.addUser(this.user).subscribe(
      (user) => {
        // tslint:disable-next-line:comment-format
        this.userAddedEvent.emit();
        this.router.navigate(['admin', 'users']);
      }
    );
  }
}
