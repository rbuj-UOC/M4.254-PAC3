/**
 * @class Todo
 *
 * Manages the data of the application.
 */

export class Todo {
    id: string;
    text: string;
    complete: boolean;

    constructor({ text = 'default text', complete = false } = {}) {
        this.id = self.crypto.randomUUID();
        this.text = text;
        this.complete = complete;
    }
}