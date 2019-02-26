import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ChatPage } from './chat';

import { ComponentsModule } from '../../components/components.module';

import { SocketIoModule, SocketIoConfig } from 'ng-socket-io';
const config: SocketIoConfig = { url: 'https://ialechat.herokuapp.com', options: {} };

@NgModule({
  declarations: [
    ChatPage,
  ],
  imports: [
    IonicPageModule.forChild(ChatPage),
    ComponentsModule,
    SocketIoModule.forRoot(config)
  ],
})
export class ChatPageModule {}
