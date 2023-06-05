import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { TodoActions } from './todo.actions';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { from, of } from 'rxjs';
import { TodoService } from 'src/app/shared/services/todo.service';



@Injectable()
export class TodoEffects {

  // execute this code when a loadTodos action is dispatched
  getTodos$ = createEffect((): any => 
    this.actions$.pipe(
      ofType(TodoActions.loadTodos),
      mergeMap((): any => {
        return this._todoService.getTodos().pipe(
          map((todos) => TodoActions.loadTodosSuccess({ todos: todos })),
          catchError((error) => of(TodoActions.loadTodosFailure({ error })))
        );
      })
    )
  );

  constructor(private actions$: Actions,
    private _todoService: TodoService) { }
}
