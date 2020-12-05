import { Component, OnInit, Input } from '@angular/core';
import { ModalController, AlertController } from '@ionic/angular';

import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-new-product',
  templateUrl: './new-product.page.html',
  styleUrls: ['./new-product.page.scss'],
})
export class NewProductPage implements OnInit {

  @Input() modalController: ModalController;
  public product = {
    'title': '',
    'value': 0,
    'image': null
  }

  public file: File

  constructor(private apiService: ApiService, public alertController: AlertController) { }

  ngOnInit() {
  }

  dismiss() {
    this.modalController.dismiss(null);
  }

  changeFileListener($event: any) {
    this.file = $event.target.files[0];
  }

  async submitForm(){    
    if(this.product.title === '' && this.product.value === 0 && this.product.image === null ){
      const alert = await this.alertController.create({
        header: 'Aviso',
        message: 'Preencha os campos e selecione uma imagem!',
        buttons: ['OK']
      });
      await alert.present();
    }
    else{
      this.apiService.postProduct(this.product, this.file).subscribe((result: any) => {
        this.modalController.dismiss(result);
      })
    }
  }

}
