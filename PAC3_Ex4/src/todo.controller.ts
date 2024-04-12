/**
 * @class TodoController
 *
 * Links the user input and the view output.
 *
 * @param model
 * @param view
 */
class TodoController {
    service: TodoService;
    view: TodoView;
    onTodoListChanged: (todos: Todo[]) => void;
    handleAddTodo: (todoText: string) => void;
    handleEditTodo: (id: string, todoText: string) => void;
    handleDeleteTodo: (id: string) => void;
    handleToggleTodo: (id: string) => void;

    constructor(service: TodoService, view: TodoView) {
        this.service = service;
        this.view = view;

        this.onTodoListChanged = (todos: Todo[]) => {
            this.view.displayTodos(todos);
        }

        this.handleAddTodo = (todoText: string) => {
            this.service.addTodo(todoText);
        };

        this.handleEditTodo = (id: string, todoText: string) => {
            this.service.editTodo(id, todoText);
        };

        this.handleDeleteTodo = (id: string) => {
            this.service.deleteTodo(id);
        };

        this.handleToggleTodo = (id: string) => {
            this.service.toggleTodo(id);
        };

        // Explicit this binding
        this.service.bindTodoListChanged(this.onTodoListChanged);
        this.view.bindAddTodo(this.handleAddTodo);
        this.view.bindEditTodo(this.handleEditTodo);
        this.view.bindDeleteTodo(this.handleDeleteTodo);
        this.view.bindToggleTodo(this.handleToggleTodo);

        // Display initial todos
        this.onTodoListChanged(this.service.todos);
    }
}