import { Component, ElementRef, ViewChild } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

import { HeaderMenu } from '../../interfaces/header-menu';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
  imports: [RouterLink, RouterLinkActive],
})
export class HeaderComponent {
  @ViewChild('navbarToggler') private readonly _navbarToggler!: ElementRef;
  @ViewChild('navbar') private readonly _navbar!: ElementRef;
  public menuItems: HeaderMenu[] = [
    {
      title: 'Inicio',
      route: 'bienvenida',
    },
    {
      title: 'Login',
      route: 'login',
    },
    {
      title: 'Autos',
      route: 'autos',
    },
    {
      title: 'Error',
      route: 'error',
    },
  ];

  public toggleMenu(): void {
    this._navbar.nativeElement.classList.toggle('show');
    this._navbarToggler.nativeElement.classList.toggle('collapsed');
  }
}
