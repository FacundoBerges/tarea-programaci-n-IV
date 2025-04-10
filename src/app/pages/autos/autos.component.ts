import { Component } from '@angular/core';

import { Auto } from '../../interfaces/auto';
import { AltaAutoComponent } from '../../components/alta-auto/alta-auto.component';
import { DetalleAutoComponent } from '../../components/detalle-auto/detalle-auto.component';
import { ListadoAutoComponent } from '../../components/listado-auto/listado-auto.component';

@Component({
  selector: 'app-autos',
  imports: [AltaAutoComponent, DetalleAutoComponent, ListadoAutoComponent],
  templateUrl: './autos.component.html',
  styleUrl: './autos.component.scss',
})
export class AutosComponent {
  public autos: Auto[] = [];
  public autoSeleccionado?: Auto;

  public alAgregarAuto(auto: Auto): void {
    this.autos.push(auto);
  }

  public alSeleccionarAuto(auto: Auto): void {
    this.autoSeleccionado = auto;
  }

  public alEliminar(auto: Auto): void {
    this.autos = this.autos.filter((a) => a !== auto);
    this.autoSeleccionado = undefined;
  }
}
