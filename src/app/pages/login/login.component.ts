import {
  AfterViewInit,
  Component,
  ElementRef,
  inject,
  QueryList,
  Renderer2,
  ViewChildren,
} from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements AfterViewInit {
  private _renderer: Renderer2 = inject(Renderer2);
  @ViewChildren('inputContainer')
  private _inputContainers!: QueryList<ElementRef>;
  @ViewChildren('inputElement') private _inputElements!: QueryList<ElementRef>;
  @ViewChildren('labelElement') private _labelElements!: QueryList<ElementRef>;
  @ViewChildren('spinElement') private _spinElements!: QueryList<ElementRef>;
  @ViewChildren('loginButton') private _loginButtons!: QueryList<ElementRef>;
  @ViewChildren('alt2Button') private _alt2Buttons!: QueryList<ElementRef>;
  @ViewChildren('shapeElement') private _shapeElements!: QueryList<ElementRef>;
  @ViewChildren('overboxElement')
  private _overboxElements!: QueryList<ElementRef>;
  @ViewChildren('boxElement') private _boxElements!: QueryList<ElementRef>;

  ngAfterViewInit(): void {
    this._inputElements.forEach((inputElement, index) => {
      const input = inputElement.nativeElement;
      input.addEventListener('focus', () => this.handleInputFocus(index));
      input.addEventListener('blur', () => this.handleInputBlur(index));
    });

    this._loginButtons.forEach((buttonElement, index) => {
      const button = buttonElement.nativeElement;
      button.addEventListener('click', (event: MouseEvent) =>
        this.handleLoginButtonClick(event, index)
      );
    });

    this._alt2Buttons.forEach((buttonElement) => {
      const button = buttonElement.nativeElement;
      button.addEventListener('click', () => this.handleAlt2Click());
    });
  }

  handleInputFocus(index: number): void {
    const label = this._labelElements.toArray()[index].nativeElement;
    const spin = this._spinElements.toArray()[index].nativeElement;
    this._renderer.setStyle(label, 'line-height', '18px');
    this._renderer.setStyle(label, 'font-size', '18px');
    this._renderer.setStyle(label, 'font-weight', '100');
    this._renderer.setStyle(label, 'top', '0px');
    this._renderer.setStyle(spin, 'width', '100%');
  }

  handleInputBlur(index: number): void {
    const input = this._inputElements.toArray()[index].nativeElement;
    const spin = this._spinElements.toArray()[index].nativeElement;
    this._renderer.setStyle(spin, 'width', '0px');
    if (input.value === '') {
      const label = this._labelElements.toArray()[index].nativeElement;
      this._renderer.setStyle(label, 'line-height', '60px');
      this._renderer.setStyle(label, 'font-size', '24px');
      this._renderer.setStyle(label, 'font-weight', '300');
      this._renderer.setStyle(label, 'top', '10px');
    }
  }

  handleLoginButtonClick(event: MouseEvent, index: number): void {
    const buttonElement = this._loginButtons.toArray()[index].nativeElement;
    const rect = buttonElement.getBoundingClientRect();
    const pX = event.clientX;
    const pY = event.clientY;
    const oX = rect.left;
    const oY = rect.top;

    const clickEffect = this._renderer.createElement('span');
    this._renderer.addClass(clickEffect, 'click-efect');
    this._renderer.addClass(clickEffect, `x-${oX}`);
    this._renderer.addClass(clickEffect, `y-${oY}`);
    this._renderer.setStyle(clickEffect, 'margin-left', `${pX - oX}px`);
    this._renderer.setStyle(clickEffect, 'margin-top', `${pY - oY}px`);
    this._renderer.appendChild(buttonElement, clickEffect);

    setTimeout(() => {
      this._renderer.setStyle(clickEffect, 'width', '500px');
      this._renderer.setStyle(clickEffect, 'height', '500px');
      this._renderer.setStyle(clickEffect, 'top', '-250px');
      this._renderer.setStyle(clickEffect, 'left', '-250px');
    }, 0);

    const innerButton = buttonElement.querySelector('button');
    if (innerButton) {
      this._renderer.addClass(innerButton, 'active');
    }
  }

  handleAlt2Click(): void {
    const alt2Button = this._alt2Buttons.first.nativeElement;
    const shape = this._shapeElements.first.nativeElement;
    const overbox = this._overboxElements.first.nativeElement;

    if (!alt2Button.classList.contains('material-button')) {
      this._renderer.setStyle(shape, 'width', '100%');
      this._renderer.setStyle(shape, 'height', '100%');
      this._renderer.setStyle(shape, 'transform', 'rotate(0deg)');

      setTimeout(() => {
        this._renderer.setStyle(overbox, 'overflow', 'initial');
      }, 600);

      this.animate(alt2Button, { width: '140px', height: '140px' }, 500, () => {
        const box = this._boxElements.first.nativeElement;
        this._renderer.removeClass(box, 'back');
        this._renderer.removeClass(alt2Button, 'active');
      });

      const overboxTitle = overbox.querySelector('.title');
      const overboxInput = overbox.querySelector('.input');
      const overboxButton = overbox.querySelector('.button');

      if (overboxTitle)
        this._renderer.setStyle(overboxTitle, 'display', 'none');
      if (overboxInput)
        this._renderer.setStyle(overboxInput, 'display', 'none');
      if (overboxButton)
        this._renderer.setStyle(overboxButton, 'display', 'none');

      this._renderer.addClass(alt2Button, 'material-button');
    } else {
      setTimeout(() => {
        this._renderer.setStyle(overbox, 'overflow', 'hidden');
        const box = this._boxElements.first.nativeElement;
        this._renderer.addClass(box, 'back');
      }, 200);

      this._renderer.addClass(alt2Button, 'active');
      this.animate(alt2Button, { width: '700px', height: '700px' }, 500, () => {
        setTimeout(() => {
          this._renderer.setStyle(shape, 'width', '50%');
          this._renderer.setStyle(shape, 'height', '50%');
          this._renderer.setStyle(shape, 'transform', 'rotate(45deg)');

          const overboxTitle = overbox.querySelector('.title');
          const overboxInput = overbox.querySelector('.input');
          const overboxButton = overbox.querySelector('.button');

          if (overboxTitle)
            this._renderer.setStyle(overboxTitle, 'display', 'block');
          if (overboxInput)
            this._renderer.setStyle(overboxInput, 'display', 'block');
          if (overboxButton)
            this._renderer.setStyle(overboxButton, 'display', 'block');
        }, 200);
        this._renderer.removeClass(alt2Button, 'material-button');
      });

      const alt2 = this._alt2Buttons.first.nativeElement;
      if (alt2.classList.contains('material-buton')) {
        this._renderer.removeClass(alt2, 'material-buton');
        this._renderer.addClass(alt2, 'material-button');
      }
    }
  }

  animate(
    element: HTMLElement,
    styles: { [key: string]: string },
    duration: number,
    callback?: () => void
  ): void {
    const start = performance.now();
    const startStyles: Record<string, string> = {};
    const elementStyle = element.style as CSSStyleDeclaration;
    for (const prop in styles) {
      startStyles[prop] = elementStyle[
        prop as keyof CSSStyleDeclaration
      ] as string;
    }

    const step = (timestamp: number) => {
      const elapsed = timestamp - start;
      const progress = Math.min(1, elapsed / duration);

      for (const prop in styles) {
        const startValue = parseFloat(startStyles[prop]) || 0;
        const endValue = parseFloat(styles[prop]);
        const unit = styles[prop].replace(endValue.toString(), '');
        const currentValue = startValue + (endValue - startValue) * progress;
        this._renderer.setStyle(element, prop, currentValue + unit);
      }

      if (progress < 1) {
        requestAnimationFrame(step);
      } else if (callback) {
        callback();
      }
    };

    requestAnimationFrame(step);
  }
}
