import {Component} from '@angular/core';
import {UserInfo} from './model/user-info';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  userInfo: UserInfo = new UserInfo('', '', 0);
  displayClickNumber(event: number) {
    console.log('click number', event);
  }

  displayUserInfo(userInfo: UserInfo) {
    console.log(userInfo);
    this.userInfo = userInfo;
  }
}
