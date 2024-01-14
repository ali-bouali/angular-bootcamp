import {AfterContentInit, AfterViewInit, Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {UserInfo} from '../../model/user-info';
import {NewUserInfo} from '../../model/new-user-info';

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.scss']
})
export class UserInfoComponent implements OnInit, AfterViewInit, AfterContentInit {
  @Input()
  isUsa: boolean = false;
  userInfo: NewUserInfo = {address: {}};

  constructor() {
    console.log('inside conctructor');
  }

  @Output()
  save: EventEmitter<NewUserInfo> = new EventEmitter<NewUserInfo>();


  onSave() {
    this.save.emit(this.userInfo);
  }

  ngOnInit(): void {
    console.log('inside on init');
  }

  ngAfterViewInit(): void {
    console.log('inside on after view init');
  }

  ngAfterContentInit(): void {
    console.log('inside after content init');
  }
}






