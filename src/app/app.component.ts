import {Component} from '@angular/core';
import {UserInfo} from './model/user-info';
import {NewUserInfo} from './model/new-user-info';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  userInfo: NewUserInfo = {};
  displayClickNumber(event: number) {
    console.log('click number', event);
  }

  displayUserInfo(userInfo: NewUserInfo) {
    console.log(userInfo);
    this.userInfo = userInfo;
  }
}
