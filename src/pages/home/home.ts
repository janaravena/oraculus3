import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

	tituloPagina: string = "Bienvenido";

  constructor(public navCtrl: NavController) {

  }

}
