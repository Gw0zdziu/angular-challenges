import { CommonModule } from '@angular/common';
import { Component, OnInit, signal, WritableSignal } from '@angular/core';
import { Todo } from './models/todo-get.model';
import { ApiService } from './services/http/api.service';

@Component({
  imports: [CommonModule],
  selector: 'app-root',
  template: `
    <div *ngFor="let todo of todos()">
      {{ todo.title }}
      <button (click)="update(todo)">Update</button>
      <button (click)="delete(todo.id)">Delete</button>
    </div>
  `,
  styles: [],
})
export class AppComponent implements OnInit {
  todos: WritableSignal<Todo[]> = signal([]);

  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    this.apiService.getTodos().subscribe((todos) => {
      this.todos.set(todos);
    });
  }

  update(todo: Todo) {
    this.apiService.updateTodo(todo).subscribe((todoUpdated: Todo) => {
      this.todos.update((x) => {
        return x.map((x) => {
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
