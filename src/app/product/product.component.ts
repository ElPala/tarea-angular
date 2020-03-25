import { Component, OnInit } from '@angular/core';
import {Product} from './Product';
import { Input } from '@angular/core';


@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  @Input() product: Product;
 
  constructor() { }
  ngOnInit(): void {
  }
 


}
