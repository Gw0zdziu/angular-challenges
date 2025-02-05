import {
  Directive,
  inject,
  Input,
  TemplateRef,
  ViewContainerRef,
} from '@angular/core';

@Directive({
  selector: '[appNgFor]',
})
export class AppNgForDirective<T> {
  private items: T[] = [];
  private templateEmpty: TemplateRef<any> | null = null;
  private templateRef = inject(TemplateRef);
  private viewContainerRef = inject(ViewContainerRef);

  @Input() set appNgForOf(items: T[]) {
    this.items = items || [];
    this.render();
  }

  @Input() set appNgForEmpty(template: TemplateRef<any>) {
    this.templateEmpty = template || null;
    this.render();
  }

  private render() {
    this.viewContainerRef.clear();
    if (this.items.length > 0) {
      this.items.forEach((item, index) => {
        this.viewContainerRef.createEmbeddedView(this.templateRef, {
          $implicit: item,
          index: index,
        });
      });
    } else if (this.templateEmpty) {
      this.viewContainerRef.createEmbeddedView(this.templateEmpty);
    }
  }
}
