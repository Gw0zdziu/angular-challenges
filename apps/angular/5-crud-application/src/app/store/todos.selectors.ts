import { createFeatureSelector, createSelector } from '@ngrx/store';
import { TodoState } from './todos.reducer';

export const selectTodoState = createFeatureSelector<TodoState>('todos');
export const selectTodos = createSelector(
  selectTodoState,
  (state) => state.todos,
);
