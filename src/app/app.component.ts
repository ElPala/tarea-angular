import { Component } from '@angular/core';
import { Product } from './product/Product';
import { EventEmitter } from 'protractor';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'my-app';
  mostrar = false;
  products: Product[];
  products2: Product[];
  search = "";
  constructor() {
    this.products = [
      new Product(12, "Smartphone", "LG", "Quadcore3GHZ", 12018.5, 5),
      new Product(123, "Smartwatch", "Sony", "3GBRam", 4999.9, 0),
      new Product(34, "SmartTV", "Sony", "52pulgadas,Conexiónwifi", 8999.9, 3)]
    this.products2 = this.products;
  }

  existencia3(event: any) {
    if (event.target.checked) {
      this.products2 = [];
      this.products.forEach(p => {
        if (p.existencia >= 3) {
          p.reslatar = true;
          this.products2.push(p);
        } else {
          this.products2.push(p);
        }
      });
    } else {
      this.products.forEach(p => {
        p.reslatar = false;
      });
    }
  }
  precio(event: any) {
    if (event.target.checked) {
      this.products2.sort((a, b) => (a.precio > b.precio) ? 1 : -1);
    } else {
      this.products2 = this.products;
    }
  }
  existencia(event: any) {
    if (event.target.checked) {
      this.products2 = [];
      this.products.forEach(p => {
        if (p.existencia >= 1) {
          this.products2.push(p);
        }
      });
      this.mostrar=false;
    } else {
      this.mostrar=true;
      this.products2 = this.products;
    }
  }
  sub() {
    console.log(this.search);
    if (this.search !== '') {
      this.products2 = [];
      this.products.forEach(p => {
        if (p.nombre.includes(this.search) ) {
          this.products2.push(p);
        }
      });
    } else {
      this.products2 = this.products;
    }
    return false;
  }
}
