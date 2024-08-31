import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-chat-user1',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './chat-user1.component.html',
  styleUrl: './chat-user1.component.css'
})
export class ChatUser1Component {
@Output()mesagge=new EventEmitter<string>();
txt:string='';
enviar(){
  this.mesagge.emit(this.txt)
  this.txt = ''
}
}
