import { CommonModule } from '@angular/common';
import { Component, Input, OnChanges, SimpleChange, SimpleChanges } from '@angular/core';
import { FormControl, FormsModule } from '@angular/forms';

@Component({
  selector: 'app-sala-view',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './sala-view.component.html',
  styleUrl: './sala-view.component.css'
})
export class SalaViewComponent implements OnChanges{
  isDisabled=true;
@Input() mensajes: string[] = [];
mensaje:String=''
ngOnChanges(changes: SimpleChanges): void {
  if (changes['mensajes']) {
   
      const msg = document.querySelector('.chat-messages');
      if (msg) {
        msg.scrollTop = msg.scrollHeight;
      }};
  }
}




