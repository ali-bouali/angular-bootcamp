import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VideoEditingComponent } from './video-editing.component';

describe('VideoEditingComponent', () => {
  let component: VideoEditingComponent;
  let fixture: ComponentFixture<VideoEditingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VideoEditingComponent]
    });
    fixture = TestBed.createComponent(VideoEditingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
