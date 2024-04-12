/**
 * @class TodoView
 *
 * Visual representation of the model.
 */
class TodoView {
    app: any;
    form: any;
    input: any;
    submitButton: any;
    title: any;
    todoList: any;
    _temporaryTodoText: string;

    constructor() {
        this.app = this.getElement("#root");
        this.form = this.createElement("form");
        this.input = this.createElement("input");
        this.input.type = "text";
        this.input.placeholder = "Add todo";
        this.input.name = "todo";
        this.submitButton = this.createElement("button");
        this.submitButton.textContent = "Submit";
        this.form.append(this.input, this.submitButton);
        this.title = this.createElement("h1");
        this.title.textContent = "Todos";
        this.todoList = this.createElement("ul", "todo-list");
        this.app.append(this.title, this.form, this.todoList);

        this._temporaryTodoText = "";
        this._initLocalListeners();
    }

    get _todoText() {
        return this.input.value;
    }

    _resetInput() {
        this.input.value = "";
    }

    createElement(tag: string, className?: string | undefined) {
        const element = document.createElement(tag);
        if (className) element.classList.add(className);
        return element;
    }

    getElement(selector: string) {
        const element = document.querySelector(selector);
        return element;
    }

    displayTodos(todos: Todo[]) {
        // Delete all nodes
        while (this.todoList.firstChild) {
            this.todoList.removeChild(this.todoList.firstChild);
        }

        // Show default message
        if (todos.length === 0) {
            const p = this.createElement("p");
            p.textContent = "Nothing to do! Add a task?";
            this.todoList.append(p);
        } else {
            // Create nodes
            todos.forEach((todo: { id: string; complete: any; text: string | null; }) => {
                const li = this.createElement("li");
                li.id = todo.id;

                const checkbox = <HTMLInputElement>this.createElement("input");
                checkbox.type = "checkbox";
                checkbox.checked = todo.complete;

                const span = this.createElement("span");
                span.contentEditable = 'true';
                span.classList.add("editable");

                if (todo.complete) {
                    const strike = this.createElement("s");
                    strike.textContent = todo.text;
                    span.append(strike);
                } else {
                    span.textContent = todo.text;
                }

                const deleteButton = this.createElement("button", "delete");
                deleteButton.textContent = "Delete";
                li.append(checkbox, span, deleteButton);

                // Append nodes
                this.todoList.append(li);
            });
        }

        // Debugging
        console.log(todos);
    }

    _initLocalListeners() {
        this.todoList.addEventListener("input", (event: { target: { className: string; innerText: string; }; }) => {
            if (event.target.className === "editable") {
                this._temporaryTodoText = event.target.innerText;
            }
        });
    }

    bindAddTodo(handler: { (todoText: string): void; (arg0: any): void; }) {
        this.form.addEventListener("submit", (event: { preventDefault: () => void; }) => {
            event.preventDefault();

            if (this._todoText) {
                handler(this._todoText);
                this._resetInput();
            }
        });
    }

    bindDeleteTodo(handler: { (id: string): void; (arg0: any): void; }) {
        this.todoList.addEventListener("click", (event: { target: { className: string; parentElement: { id: any; }; }; }) => {
            if (event.target.className === "delete") {
                const id = event.target.parentElement.id;
                handler(id);
            }
        });
    }

    bindEditTodo(handler: { (id: string, todoText: string): void; (arg0: any, arg1: string): void; }) {
        this.todoList.addEventListener("focusout", (event: { target: { parentElement: { id: any; }; }; }) => {
            if (this._temporaryTodoText) {
                const id = event.target.parentElement.id;
                handler(id, this._temporaryTodoText);
                this._temporaryTodoText = "";
            }
        });
    }

    bindToggleTodo(handler: { (id: string): void; (arg0: any): void; }) {
        this.todoList.addEventListener("change", (event: { target: { type: string; parentElement: { id: any; }; }; }) => {
            if (event.target.type === "checkbox") {
                const id = event.target.parentElement.id;
                handler(id);
            }
        });
    }
}