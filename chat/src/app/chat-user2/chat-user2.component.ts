import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-chat-user2',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './chat-user2.component.html',
  styleUrl: './chat-user2.component.css'
})
export class ChatUser2Component {
  @Output()mesagge=new EventEmitter<string>();
  txt:string="";
  enviar(){
    this.mesagge.emit(this.txt)
    this.txt = ''
}}
