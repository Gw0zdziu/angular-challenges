/* eslint-disable @angular-eslint/component-selector */
import { Component } from '@angular/core';

@Component({
  selector: 'text',
  standalone: true,
  template: `
    <p class="paragraph">
      <ng-content></ng-content>
    </p>
  `,
  styles: `
    .paragraph {
      color: var(--title-color, black);
      font-size: var(--title-size, 10px);
    }
  `,
})
export class TextComponent {}
