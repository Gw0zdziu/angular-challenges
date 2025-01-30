import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { ApplicationConfig } from '@angular/core';
import { provideEffects } from '@ngrx/effects';
import { provideStore } from '@ngrx/store';
import { errorInterceptor } from './interceptors/error.interceptor';
import { TodoEffects } from './store/todo.effects';
import { todosReducer } from './store/todos.reducer';

export const appConfig: ApplicationConfig = {
  providers: [
    provideHttpClient(withInterceptors([errorInterceptor])),
    provideStore({ todos: todosReducer }),
    provideEffects(TodoEffects),
  ],
};
