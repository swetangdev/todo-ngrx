import { createReducer, on } from '@ngrx/store';
import { TodoActions } from './todo.actions';
import { Todo } from '../../shared/models/todo.modal';


const todoList: Todo[] = [
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
];

export interface ToDoState {
  todos: Todo[];
  error?: string | null;
  isLoading?: boolean;
}

export const initialState: ToDoState = {
  todos: todoList,
  error: null,
  isLoading: false
};

export const todoReducer = createReducer(
  initialState,
  on(TodoActions.loadTodos, (state) => ({
    ...state,
    isLoading: true
  })),
  on(TodoActions.loadTodosSuccess, (state, action) => ({
    ...state,
    todos: action.todos,
    error: null,
    isLoading: false
  })),
  on(TodoActions.loadTodosFailure, (state, action) => ({
    ...state,
    isLoading: false,
    error : action.error
  })),
  on(TodoActions.addTodo, (state, { content }) => ({
    ...state,
    todos: [...state.todos, { id: Math.random().toString(), content: content }]
  })),
  on(TodoActions.removeTodo, (state, { id }) => ({
    ...state,
    todos: state.todos.filter((todo) => todo.id !== id)
  }))
);

