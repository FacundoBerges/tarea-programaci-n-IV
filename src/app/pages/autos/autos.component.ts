import { Component } from '@angular/core';
import { TitleCasePipe } from '@angular/common';

import { Auto } from '../../interfaces/auto';
import { AltaAutoComponent } from '../../components/alta-auto/alta-auto.component';
import { DetalleAutoComponent } from '../../components/detalle-auto/detalle-auto.component';
import { ListadoAutoComponent } from '../../components/listado-auto/listado-auto.component';

@Component({
  selector: 'app-autos',
  imports: [
    AltaAutoComponent,
    DetalleAutoComponent,
    ListadoAutoComponent,
    TitleCasePipe,
  ],
  templateUrl: './autos.component.html',
  styleUrl: './autos.component.scss',
})
export class AutosComponent {
  public autos: Auto[] = [];
}
