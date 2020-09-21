import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-product',
    template: `
        <img class="img-thumbnail" width="150px" height="150px" src={{product.imageUrl}} />
        <h2><a [routerLink]="['/product', product.id]">{{product.name}}</a></h2>
        <p>{{product.price}}</p>
    `,    
})

export class ProductComponent{
    @Input() product;
}