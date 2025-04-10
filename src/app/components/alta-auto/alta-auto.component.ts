import { Component, output, OutputEmitterRef } from '@angular/core';

import { Auto } from '../../interfaces/auto';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-alta-auto',
  imports: [FormsModule],
  templateUrl: './alta-auto.component.html',
  styleUrl: './alta-auto.component.scss',
})
export class AltaAutoComponent {
  public readonly autoEmitterRef: OutputEmitterRef<Auto> = output<Auto>();
  public auto: Auto = {
    marca: '',
    modelo: '',
    precio: 0,
  };

  public onSubmit(): void {
    if (!this._isValidAuto()) return;

    this.autoEmitterRef.emit(this.auto);
    this.auto = {
      marca: '',
      modelo: '',
      precio: 0,
    };
  }

  private _isValidAuto(): boolean {
    return (
      this.auto.marca.length > 0 &&
      this.auto.modelo.length > 0 &&
      this.auto.precio > 0
    );
  }
}
