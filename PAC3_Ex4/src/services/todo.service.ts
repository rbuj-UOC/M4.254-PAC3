import { Todo } from '../models/todo';

/**
 * @class TodoService
 *
 * Manages the data of the application.
 */
export class TodoService {
    todos: Todo[];
    onTodoListChanged: ((todos: Todo[]) => void) | undefined;

    constructor() {
        const todosText = localStorage.getItem("todos");
        if (todosText) {
            this.todos = (JSON.parse(todosText) || []).map(
                (todo: { complete: boolean; text: any; } | undefined) => new Todo(todo)
            );
        } else {
            this.todos = new Array() as Array<Todo>;
        }
    }

    bindTodoListChanged(callback: (todos: Todo[]) => void): void {
        this.onTodoListChanged = callback;
    }

    _commit(todos: Todo[]): void {
        if (this.onTodoListChanged) {
            this.onTodoListChanged(todos);
        }
        localStorage.setItem("todos", JSON.stringify(todos));
    }

    addTodo(text: string): void {
        this.todos.push(new Todo({ text }));
        this._commit(this.todos);
    }

    editTodo(id: string, updatedText: string): void {
        this.todos = this.todos.map(todo =>
            todo.id === id
                ? new Todo({
                    ...todo,
                    text: updatedText
                })
                : todo
        );
        this._commit(this.todos);
    }

    deleteTodo(_id: string): void {
        this.todos = this.todos.filter(({ id }) => id !== _id);
        this._commit(this.todos);
    }

    toggleTodo(_id: string): void {
        this.todos = this.todos.map(todo =>
            todo.id === _id ? new Todo({ ...todo, complete: !todo.complete }) : todo
        );
        this._commit(this.todos);
    }
}
