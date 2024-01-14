import {Component, EventEmitter, Output} from '@angular/core';
import {UserInfo} from '../../model/user-info';
import {NewUserInfo} from '../../model/new-user-info';

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
  save: EventEmitter<NewUserInfo> = new EventEmitter<NewUserInfo>();


  onSave() {
    const userInfo: NewUserInfo = {
      firstname: this.firstName,
      lastname: this.lastName,
      age: this.age
    };
    this.save.emit(userInfo);
  }
}






