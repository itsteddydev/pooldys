import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { SvgMinusComponent } from './components/svg-minus/svg-minus.component';
import { SvgPlusComponent } from './components/svg-plus/svg-plus.component';

@Component({
  selector: 'pooldys-quantify-changer',
  templateUrl: './quantify-changer.component.html',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [SvgMinusComponent, SvgPlusComponent]
})
export class QuantifyChangerComponent {
  public count = 0;
  @Input() productId!: number;
  @Output() quantifyProductChanged = new EventEmitter();


  onDecrement(): void {
    if (this.count > 0) {
      this.count--;
    }
  }
  onIncrement(): void {
    this.count++;
  }

  isBtnDisabled(): boolean {
    return this.count === 0;
  }
}
