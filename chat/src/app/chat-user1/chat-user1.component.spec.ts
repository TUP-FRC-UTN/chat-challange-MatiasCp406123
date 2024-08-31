import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChatUser1Component } from './chat-user1.component';

describe('ChatUser1Component', () => {
  let component: ChatUser1Component;
  let fixture: ComponentFixture<ChatUser1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChatUser1Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChatUser1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
