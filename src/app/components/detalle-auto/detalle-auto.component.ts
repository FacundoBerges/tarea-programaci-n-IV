import {
  Component,
  input,
  InputSignal,
  output,
  OutputEmitterRef,
} from '@angular/core';
import { CurrencyPipe } from '@angular/common';

import { Auto } from '../../interfaces/auto';

@Component({
  selector: 'app-detalle-auto',
  imports: [CurrencyPipe],
  templateUrl: './detalle-auto.component.html',
  styleUrl: './detalle-auto.component.scss',
})
export class DetalleAutoComponent {
  public readonly eliminarEmitterRef: OutputEmitterRef<Auto> = output<Auto>();
  public autoSeleccionado: InputSignal<Auto | undefined> = input<Auto>();

  public eliminar(): void {
    const auto = this.autoSeleccionado();

    if (!auto) return;

    this.eliminarEmitterRef.emit(auto);
  }
}
