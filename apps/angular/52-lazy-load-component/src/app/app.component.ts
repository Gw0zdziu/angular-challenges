import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <div class="h-screen bg-gray-500">
      @defer (on interaction(buttonLoaded)) {
        <app-top />
      } @placeholder {
        <app-placeholder />
      }
      <button
        #buttonLoaded
        class="rounded-sm border border-blue-500 bg-blue-300 p-2">
        Load Top
      </button>
    </div>
  `,
  standalone: false,
})
export class AppComponent {}
