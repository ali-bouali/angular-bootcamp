import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-user-info',
  templateUrl: "user-info.component.html",
  styleUrls: ['./user-info.component.scss', '../../my-styles/my-style.scss']
})
export class UserInfoComponent {
  // fieldName: Type [ = InitValue];
  @Input()
  label: string = '';
  counter: number = 0;
  eventName: string = '';


  incrementCounter(): void {
    this.eventName = 'click';
    this.counter++;
  }
}
