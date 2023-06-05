import { createActionGroup, emptyProps, props } from '@ngrx/store';
import { Todo } from '../../shared/models/todo.modal';


export const TodoActions = createActionGroup({
  source: 'Todo',
  events: {
    'Load Todos': emptyProps(),
    'Load Todos Success': props<{ todos: Todo[] }>(),
    'Load Todos Failure': props<{ error: string }>(),
    'Add Todo': props<{ content: string }>(),
    'Remove Todo': props<{ id: string }>(),
  }
});
