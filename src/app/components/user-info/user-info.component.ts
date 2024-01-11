import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-user-info',
  templateUrl: "user-info.component.html",
  styleUrls: ['./user-info.component.scss', '../../my-styles/my-style.scss']
})
export class UserInfoComponent {
  // fieldName: Type [ = InitValue];
  @Input()
  label: string = '';
  private counter: number = 0;
  eventName: string = '';

  @Output()
  myClickEvent: EventEmitter<number> = new EventEmitter<number>();


  incrementCounter(): void {
    this.eventName = 'Click';
    this.counter++;
    this.myClickEvent.emit(this.counter);
  }
}
