import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HabilidadeService } from '../../services/domain/habilidade.service';

@IonicPage()
@Component({
  selector: 'page-habilidades',
  templateUrl: 'habilidades.html',
})
export class HabilidadesPage {

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public habilidadeService: HabilidadeService) {
  }

  ionViewDidLoad() {
    this.habilidadeService.findAll()
      .subscribe(response => {
        console.log(response);
      },
      error => {
        console.log(error);
      });
  }
}