import { ChangeDetectionStrategy, Component } from '@angular/core';
import { AppNgForDirective } from './ng-for.directive';

interface Person {
  name: string;
}

@Component({
  imports: [AppNgForDirective],
  selector: 'app-root',
  template: `
    <!--<ng-container *ngIf="persons.length > 0; else emptyList">
      <div *ngFor="let person of persons">
        {{ person.name }}
      </div>
    </ng-container>-->
    <ng-template #empty>Pusta tablica</ng-template>
    <div *appNgFor="let person of persons; empty: empty">
      {{ person.name }}
    </div>
  `,
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {
  persons: Person[] = [];
}
