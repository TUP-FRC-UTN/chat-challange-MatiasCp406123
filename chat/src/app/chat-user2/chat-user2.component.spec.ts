import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChatUser2Component } from './chat-user2.component';

describe('ChatUser2Component', () => {
  let component: ChatUser2Component;
  let fixture: ComponentFixture<ChatUser2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChatUser2Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChatUser2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
