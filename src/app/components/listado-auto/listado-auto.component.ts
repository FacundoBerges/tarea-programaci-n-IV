import {
  Component,
  input,
  InputSignal,
  OnInit,
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
export class ListadoAutoComponent implements OnInit {
  public autoEmmiterRef: OutputEmitterRef<Auto> = output<Auto>();
  public autoSeleccionado?: Auto;
  public autos: InputSignal<Auto[]> = input<Auto[]>([]);

  ngOnInit(): void {
    if (!this.autos) {
      throw new Error('Autos input is required');
    }
  }

  public seleccionarAuto(auto: Auto): void {
    this.autoSeleccionado = auto;
    this.autoEmmiterRef.emit(this.autoSeleccionado);
  }
}
