import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { TransformPipe } from './transform.pipe';

@Component({
  imports: [NgFor, TransformPipe],
  selector: 'app-root',
  template: `
    <div *ngFor="let person of persons; let index = index">
      {{ person | transformText: index }}
    </div>
  `,
})
export class AppComponent {
  persons: string[] = ['toto', 'jack'];
}
