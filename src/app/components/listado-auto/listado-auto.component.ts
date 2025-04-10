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
  selector: 'app-listado-auto',
  imports: [CurrencyPipe],
  templateUrl: './listado-auto.component.html',
  styleUrl: './listado-auto.component.scss',
})
export class ListadoAutoComponent {
  public autoEmmiterRef: OutputEmitterRef<Auto> = output<Auto>();
  public autos: InputSignal<Auto[]> = input<Auto[]>([]);
  public autoSeleccionado?: Auto;

  public seleccionarAuto(auto: Auto): void {
    this.autoSeleccionado = auto;
    this.autoEmmiterRef.emit(this.autoSeleccionado);
  }
}
