import { createAction, props } from '@ngrx/store';
import { Todo } from '../models/todo.model';

export const getTodos = createAction('[Todos] GetTodo');
export const getTodosSuccess = createAction(
  '[Todos] GetTodoSuccess',
  props<{ todos: Todo[] }>(),
);
export const updateTodo = createAction(
  '[Todos] UpdateTodo',
  props<{ todo: Todo }>(),
);

export const updateTodoSuccess = createAction(
  '[Todos] UpdateTodo',
  props<{ todo: Todo }>(),
);
