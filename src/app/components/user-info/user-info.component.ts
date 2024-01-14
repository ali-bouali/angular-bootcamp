import {Component, EventEmitter, Output} from '@angular/core';
import {UserInfo} from '../../model/user-info';

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.scss']
})
export class UserInfoComponent {
  firstName = '';
  lastName = '';
  age = 0;

  @Output()
  save: EventEmitter<UserInfo> = new EventEmitter<UserInfo>();


  onSave() {
    const userInfo = new UserInfo(
      this.firstName,
      this.lastName,
      this.age
    );
    this.save.emit(userInfo);
  }
}






