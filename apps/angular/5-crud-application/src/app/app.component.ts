import { CommonModule } from '@angular/common';
import {
  Component,
  inject,
  OnInit,
  signal,
  WritableSignal,
} from '@angular/core';
import { MatProgressSpinner } from '@angular/material/progress-spinner';
import { Todo } from './models/todo.model';
import { ApiService } from './services/http/api.service';

@Component({
  imports: [CommonModule, MatProgressSpinner],
  selector: 'app-root',
  template: `
    @if (todos().length === 0) {
      <mat-progress-spinner mode="indeterminate"></mat-progress-spinner>
    } @else {
      <div *ngFor="let todo of todos()">
        {{ todo.title }}
        <button (click)="update(todo)">Update</button>
        <button (click)="delete(todo.id)">Delete</button>
      </div>
    }
  `,
  styles: [],
})
export class AppComponent implements OnInit {
  todos: WritableSignal<Todo[]> = signal([]);
  private apiService = inject(ApiService);

  ngOnInit(): void {
    this.apiService.getTodos().subscribe((todos) => {
      this.todos.set(todos);
    });
  }

  update(todo: Todo) {
    this.apiService.updateTodo(todo).subscribe((todoUpdated: Todo) => {
      this.todos.update((x) => {
        return x.map((x) => {
          return x.id !== todo.id ? x : todoUpdated;
          if (x.id !== todo.id) {
            return x;
          } else {
            return todoUpdated;
          }
        });
      });
    });
  }

  delete(id: number) {
    this.apiService.deleteTodo(id).subscribe(() => {
      this.todos.update((x) => {
        return x.filter((x) => x.id !== id);
      });
    });
  }
}
