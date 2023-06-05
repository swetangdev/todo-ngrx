import { Component, OnInit } from '@angular/core';
import { Todo } from '../shared/models/todo.modal';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { errorSelector, isLoadingSelector, selectAllToDos } from '../state/todo/todo.selectors';
import { ToDoState } from '../state/todo/todo.reducer';
import { AppState } from '../state/app.state';
import { TodoActions } from '../state/todo/todo.actions';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent implements OnInit {

  isLoading$?: Observable<ToDoState["isLoading"]>;
  allTodos$?: Observable<Todo[]>;
  isError$?: Observable<string | null | undefined>;
  // this._store.select(selectAllToDos);

  constructor(private _store: Store<AppState>) {
    this.isLoading$ = this._store.pipe(select(isLoadingSelector))
    this.allTodos$ = this._store.pipe(select(selectAllToDos));
    this.isError$ = this._store.pipe(select(errorSelector));
  }

  ngOnInit(): void {
    this._store.dispatch(TodoActions.loadTodos());
  }
}
