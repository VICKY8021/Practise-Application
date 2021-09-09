import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-practise',
  templateUrl: './practise.component.html',
  styleUrls: ['./practise.component.scss'],
})
export class PractiseComponent implements OnInit {

  constructor(private modalcontroller: ModalController) { }

  ngOnInit() { }

  closepopup() {
    console.log('Hi')
    this.modalcontroller.dismiss();
  }

}
