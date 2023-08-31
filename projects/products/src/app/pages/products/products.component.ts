import { AsyncPipe, NgFor, NgIf } from '@angular/common';
import { Component, OnInit, inject } from '@angular/core';
import { CardComponent } from './components/card/card.component';
import { Observable } from 'rxjs';
import { Product } from './interfaces/product.interface';

@Component({
  selector: 'pooldys-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
  standalone: true,
  imports: [
    NgIf,
    NgFor,
    AsyncPipe,
    CardComponent
  ]
})
export class ProductsComponent implements OnInit {
  product$!: Observable<Product[]>;
  private readonly productsSvc = inject(ProductsService);
  // constructor() { }

  ngOnInit() {
    this.product$ = this.productsSvc.getProducts();
  }

}
