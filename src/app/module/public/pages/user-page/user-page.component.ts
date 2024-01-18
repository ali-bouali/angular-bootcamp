import { Component } from '@angular/core';
import {NewUserInfo} from '../../../../model/new-user-info';

@Component({
  selector: 'app-user-page',
  templateUrl: './user-page.component.html',
  styleUrls: ['./user-page.component.scss']
})
export class UserPageComponent {

  userInfo: NewUserInfo = {address: {}};
  displayClickNumber(event: number) {
    console.log('click number', event);
  }

  displayUserInfo(userInfo: NewUserInfo) {
    console.log(userInfo);
    this.userInfo = userInfo;
  }
}
