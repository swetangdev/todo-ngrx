import { Injectable } from '@angular/core';
import { Observable, delay, of, throwError } from 'rxjs';
import { Todo } from '../models/todo.modal';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  todoList: Todo[] = [
    { 
      id: '1',
      content: 'create ngrx app'
    },
    { 
      id: '2',
      content: 'create angular app'
    },
    { 
      id: '3',
      content: 'push app to github'
    },
    { 
      id: '4',
      content: 'deploy the app'
    }
  ]

  getTodos(): Observable<Todo[]> {
    // throw new Error('Error in todo');
    return of(this.todoList).pipe(delay(2000));
  }
}
