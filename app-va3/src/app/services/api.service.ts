import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class ApiService {

    constructor(private httpClient: HttpClient) { }

    getProducts() {
        return this.httpClient.get('http://localhost:3333/api/product/list');
    }

    postProduct(product: any, file: File) {
        let formData = new FormData();
        formData.append('title', product.title)
        formData.append('value', product.value)
        formData.append('image', file)

        return this.httpClient.post('http://localhost:3333/api/product/create', formData);
    }

    postContact(contact: any) {
        return this.httpClient.post('http://localhost:3333/api/contact/create', contact)
    }

}