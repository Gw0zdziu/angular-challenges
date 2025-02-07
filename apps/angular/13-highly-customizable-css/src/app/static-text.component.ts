/* eslint-disable @angular-eslint/component-selector */
import { Component } from '@angular/core';
import { TextComponent } from './text.component';

export type StaticTextType = 'normal' | 'warning' | 'error';

@Component({
  selector: 'static-text',
  imports: [TextComponent],
  template: `
    <text class="paragraph">This is a static text</text>
  `,
  styles: [
    `
      :host-context(.warning-theme) .paragraph {
        --title-size: 30px;
        --title-color: red;
      }
      :host-context(.error-theme) .paragraph {
        --title-size: 25px;
        --title-color: orange;
      }
    `,
  ],
})
export class TextStaticComponent {}
