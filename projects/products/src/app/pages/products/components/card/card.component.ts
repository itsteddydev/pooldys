import { Component, Input } from '@angular/core';
import { Product, QuantifyProductChanged } from '../../interfaces/product.interface';
import { CurrencyPipe, NgIf, NgOptimizedImage, TitleCasePipe } from '@angular/common';
import { QuantifyChangerComponent } from './components/quantify-changer/quantify-changer.component';
import { AddToCartComponent } from './components/add-to-cart/add-to-cart.component';

@Component({
  selector: 'pooldys-card',
  templateUrl: './card.component.html',
  standalone: true,
  imports: [
    NgOptimizedImage,
    QuantifyChangerComponent,
    AddToCartComponent,
    TitleCasePipe,
    CurrencyPipe,
    NgIf,
  ],
})
export class CardComponent {
  @Input() product!: Product;
  private productAndCount!: QuantifyProductChanged;

  onQuantifyProductChange(productAndCount: QuantifyProductChanged): void {
    this.productAndCount = productAndCount;
  }
  onAddProduct(productId: number): void {
    //TODO -
  }
  showProductAddedText(): void {
    //TODO -
  }
}
