import { Component, output, OutputEmitterRef } from '@angular/core';
import {
  FormsModule,
  ReactiveFormsModule,
  FormBuilder,
  Validators,
  FormGroup,
} from '@angular/forms';

import { Auto } from '../../interfaces/auto';

@Component({
  selector: 'app-alta-auto',
  imports: [FormsModule, ReactiveFormsModule],
  templateUrl: './alta-auto.component.html',
  styleUrl: './alta-auto.component.scss',
})
export class AltaAutoComponent {
  private _formBuilder: FormBuilder = new FormBuilder();
  public readonly autoEmitterRef: OutputEmitterRef<Auto> = output<Auto>();
  public formularioAlta: FormGroup = this._formBuilder.group({
    marca: ['', [Validators.required, Validators.minLength(2)]],
    modelo: ['', [Validators.required, Validators.minLength(2)]],
    precio: [0, [Validators.required, Validators.min(1)]],
  });

  public get marca() {
    return this.formularioAlta.get('marca');
  }

  public get modelo() {
    return this.formularioAlta.get('modelo');
  }

  public get precio() {
    return this.formularioAlta.get('precio');
  }

  public onSubmit(): void {
    this.formularioAlta.markAllAsTouched();
    if (!this.formularioAlta.valid) return;

    const auto: Auto = {
      marca: this.marca?.value,
      modelo: this.modelo?.value,
      precio: this.precio?.value,
    };

    this.autoEmitterRef.emit(auto);
    this.formularioAlta.reset();
  }
}
