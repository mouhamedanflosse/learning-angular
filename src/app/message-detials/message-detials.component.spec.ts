import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MessageDetialsComponent } from './message-detials.component';

describe('MessageDetialsComponent', () => {
  let component: MessageDetialsComponent;
  let fixture: ComponentFixture<MessageDetialsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MessageDetialsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MessageDetialsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
