import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { ModalController } from '@ionic/angular';

import { NewProductPage } from '../new-product/new-product.page';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.page.html',
  styleUrls: ['./products.page.scss'],
})
export class ProductsPage implements OnInit {

  public products = []

  constructor(private apiService: ApiService, public alertController: AlertController, private router: Router, private modalController: ModalController) { }

  ngOnInit() {
    this.loadProducts()
  }

  loadProducts() {
    this.apiService.getProducts().subscribe((result: any) => this.products = result)
  }

  async presentNewProduct() {
    const modal = await this.modalController.create({
      component: NewProductPage,
      componentProps: {
        'modalController': this.modalController
      }
    })

    await modal.present();

    const { data } = await modal.onWillDismiss();
    if(data){
      this.loadProducts();
    }
  }

}
