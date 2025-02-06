import {
  Directive,
  inject,
  Input,
  TemplateRef,
  ViewContainerRef,
} from '@angular/core';
import { Role } from './user.model';
import { UserStore } from './user.store';

@Directive({
  selector: '[appHasRole]',
})
export class HasRoleDirective<T> {
  private templateRef = inject(TemplateRef);
  private viewContainerRef = inject(ViewContainerRef);
  private userStore = inject(UserStore);

  @Input() set appHasRole(data: T) {
    this.userStore.user$.subscribe((user) => {
      this.viewContainerRef.clear();
      if (!user?.isAdmin) {
        let isAccess: boolean | undefined = false;
        if (Array.isArray(data)) {
          isAccess = user?.roles.some((x) => data.includes(x));
        }
        if (typeof data === 'string') {
          isAccess = user?.roles.includes(<Role>data);
        }

        if (isAccess) {
          this.viewContainerRef.createEmbeddedView(this.templateRef);
        }
      }
    });
  }
}
