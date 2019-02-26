import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { Socket } from 'ng-socket-io';

/**
 * Generated class for the ChatPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-chat',
  templateUrl: 'chat.html',
})
export class ChatPage {

	tituloPagina: string = "Chatbox";

	nickname = '';

  constructor(public navCtrl: NavController, public navParams: NavParams, private socket: Socket) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ChatPage');
  }

  unirseAlChat() {
    this.socket.connect();
    this.socket.emit('set-nickname', this.nickname);
    this.navCtrl.push('ChatRoomPage', { nickname: this.nickname });
  }

}
