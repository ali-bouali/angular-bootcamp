import {Component, EventEmitter, Output} from '@angular/core';
import {UserInfo} from '../../model/user-info';
import {NewUserInfo} from '../../model/new-user-info';

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.scss']
})
export class UserInfoComponent {
  userInfo: NewUserInfo = {address: {}};

  @Output()
  save: EventEmitter<NewUserInfo> = new EventEmitter<NewUserInfo>();


  onSave() {
    this.save.emit(this.userInfo);
  }
}






