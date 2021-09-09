import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { PractiseComponent } from '../practise/practise.component';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private modalcontroller: ModalController) { }


  async selectpeople() {
    const popover = await this.modalcontroller.create({
      component: PractiseComponent,
      animated: true,
      showBackdrop: true,
      backdropDismiss: false,
      cssClass: 'modal-xs modal-h-312'
    });
    return await popover.present();

  }
}
