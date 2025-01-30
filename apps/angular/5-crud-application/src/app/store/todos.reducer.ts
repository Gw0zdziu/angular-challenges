import { createReducer, on } from '@ngrx/store';
import { Todo } from '../models/todo.model';
import { getTodosSuccess, updateTodoSuccess } from './todos.actions';

export interface TodoState {
  todos: Todo[];
}

export const initialState: TodoState = {
  todos: [],
};
export const todosReducer = createReducer(
  initialState,
  on(getTodosSuccess, (state, { todos }) => ({ ...state, todos })),
  on(updateTodoSuccess, (state, { todo }) => ({
    ...state,
    todos: state.todos.map((x) => (x.id !== todo.id ? x : todo)),
  })),
);
