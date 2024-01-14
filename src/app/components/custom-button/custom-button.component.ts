import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-custom-button',
  templateUrl: "custom-button.component.html",
  styleUrls: ['./custom-button.component.scss', '../../my-styles/my-style.scss']
})
export class CustomButtonComponent {
  // fieldName: Type [ = InitValue];
  @Input()
  label: string = '';
  private counter: number = 0;
  eventName: string = '';
  // Dummy Component
  @Output()
  myClickEvent: EventEmitter<number> = new EventEmitter<number>();


  incrementCounter(): void {
    this.eventName = 'Click';
    this.counter++;
    this.myClickEvent.emit(this.counter);
  }
}
