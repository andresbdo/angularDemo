import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private products = [
    {id: 1, imageUrl: "https://http2.mlstatic.com/xiaomi-mi-a2-lite-64gb-4gb-4g-nuevo-versglobal-libre-gtia-D_NQ_NP_882657-MLA31352222566_072019-F.jpg", name: "Xiaomi mi a2 lite", category: "smartphone", description: "lorem ipsum dolor sit amet", price: "150$"},
    {id: 2, imageUrl: "https://i.linio.com/p/e46bb5e8dcc92e7bd0b5df88531117ef-zoom.webp", name: 'Smart TV 32"', category: "tv", description: "lorem ipsum dolor sit amet", price: "500$"},
    {id: 3, imageUrl: "https://http2.mlstatic.com/D_NQ_NP_822504-MLA42869925761_072020-O.webp", name: 'McBook Pro', category: "notebook", description: "lorem ipsum dolor sit amet", price: "2700$"}
  ]

  getAllProducts(){
    return this.products;
  }

  getProductById(id){
    return this.products.filter(product => product.id == id);
  }
}
