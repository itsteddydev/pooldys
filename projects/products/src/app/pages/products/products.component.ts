import { AsyncPipe, NgFor, NgIf } from '@angular/common';
import { Component, OnInit, inject } from '@angular/core';
import { CardComponent } from './components/card/card.component';
import { Observable } from 'rxjs';
import { Product } from './interfaces/product.interface';
import { ProductsService } from './services/products.service';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'pooldys-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
  standalone: true,
  providers: [ProductsService],
  imports: [
    NgIf,
    NgFor,
    AsyncPipe,
    CardComponent,
    HttpClientModule
  ]
})
export default class ProductsComponent implements OnInit {
  product$!: Observable<Product[]>;
  private readonly productsSvc = inject(ProductsService);
  // constructor() { }

  ngOnInit() {
    this.product$ = this.productsSvc.getProducts();
  }

}
