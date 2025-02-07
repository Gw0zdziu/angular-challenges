/* eslint-disable @angular-eslint/component-selector */
import { Component } from '@angular/core';
import { TextStaticComponent } from './static-text.component';
import { TextComponent } from './text.component';

@Component({
  selector: 'page',
  imports: [TextStaticComponent, TextComponent],
  template: `
    <static-text></static-text>
    <static-text class="error-theme"></static-text>
    <static-text class="warning-theme"></static-text>
    <text class="text-1">This is a blue text</text>
  `,
  styles: [
    `
      text.text-1 {
        --title-size: 15px;
        --title-color: blue;
      }
    `,
  ],
})
export class PageComponent {}
