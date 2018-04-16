
3
4
5
6
7
8
9
10
11
12
13
14
15
16
17
18
19
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Socket } from 'ng-socket-io';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  nickname = '';

  constructor(public navCtrl: NavController, private socket: Socket) { }

  joinChat() {
    this.socket.connect();
    this.socket.emit('set-nickname', this.nickname);
    this.navCtrl.push('ChatRoomPage', { nickname: this.nickname });
  }
}