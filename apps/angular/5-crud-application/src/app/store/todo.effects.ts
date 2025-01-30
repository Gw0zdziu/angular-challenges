import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, mergeMap, switchMap } from 'rxjs';
import { ApiService } from '../services/http/api.service';
import {
  deleteTodo,
  deleteTodoSuccess,
  getTodos,
  getTodosSuccess,
  updateTodo,
  updateTodoSuccess,
} from './todos.actions';

@Injectable()
export class TodoEffects {
  constructor(
    private actions$: Actions,
    private apiService: ApiService,
  ) {}

  loadTodos$ = createEffect(() =>
    this.actions$.pipe(
      ofType(getTodos),
      mergeMap(() =>
        this.apiService
          .getTodos()
          .pipe(map((todos) => getTodosSuccess({ todos }))),
      ),
    ),
  );

  updateTodo$ = createEffect(() =>
    this.actions$.pipe(
      ofType(updateTodo),
      switchMap((x) =>
        this.apiService
          .updateTodo(x.todo)
          .pipe(map((todo) => updateTodoSuccess({ todo }))),
      ),
    ),
  );

  deleteTodo$ = createEffect(() =>
    this.actions$.pipe(
      ofType(deleteTodo),
      switchMap((x) =>
        this.apiService.deleteTodo(x.id).pipe(map(() => deleteTodoSuccess(x))),
      ),
    ),
  );
}
