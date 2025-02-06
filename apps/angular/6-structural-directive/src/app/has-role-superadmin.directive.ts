import {
  Directive,
  inject,
  Input,
  TemplateRef,
  ViewContainerRef,
} from '@angular/core';

@Directive({
  selector: '[appHasRoleSuperAdmin]',
  standalone: true,
})
export class HasRoleSuperAdminDirective<T> {
  private templateRef = inject(TemplateRef);
  private viewContainerRef = inject(ViewContainerRef);
  @Input() set appHasRoleSuperAdmin(isManager: T | null | undefined) {
    if (isManager) {
      this.viewContainerRef.createEmbeddedView(this.templateRef);
    } else {
      this.viewContainerRef.clear();
    }
  }
}
