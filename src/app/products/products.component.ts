import { Component, OnInit } from '@angular/core';
import { DataService } from '../shared/data.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  public products = [];

  constructor(private dataSvc: DataService) { }

  ngOnInit(): void {
    this.products = this.dataSvc.getAllProducts();
  }

}
