import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SalaViewComponent } from './sala-view/sala-view.component';
import { ChatUser1Component } from './chat-user1/chat-user1.component';
import { ChatUser2Component } from './chat-user2/chat-user2.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,SalaViewComponent,ChatUser1Component
    ,ChatUser2Component
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'chat';
  messages:string[]=[]
  llego(enviado:string){
    this.messages.push(enviado)
  }
}
