import { createSelector } from '@ngrx/store';
import { AppState } from '../app.state';
import { ToDoState } from './todo.reducer';

export const selectToDos = (state: AppState) => state.todos;

export const isLoadingSelector = createSelector(
    selectToDos,
    (state: ToDoState) => state.isLoading
);

export const selectAllToDos = createSelector(
    selectToDos,
    (state: ToDoState) => state.todos
);

export const errorSelector = createSelector(
    selectToDos,
    (state) => state.error
);