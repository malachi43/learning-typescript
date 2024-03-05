import { TodoItem } from "./todoItem.js";
export class TodoCollection {
    userName;
    nextId = 1;
    itemMap = new Map();
    constructor(userName, todoItem = []) {
        this.userName = userName;
        todoItem.forEach((todo) => this.itemMap.set(todo.id, todo));
    }
    addTodo(todo) {
        while (this.getTodoById(this.nextId)) {
            this.nextId++;
        }
        this.itemMap.set(this.nextId, new TodoItem(this.nextId, todo));
        return this.nextId;
    }
    getTodoById(id) {
        return this.itemMap.get(id);
    }
    getTodoItems(includeComplete) {
        return [...this.itemMap.values()].filter((todo) => includeComplete || !todo.complete);
    }
    markComplete(id, complete) {
        const todoItem = this.getTodoById(id);
        if (todoItem) {
            todoItem.complete = complete;
        }
    }
    removeComplete() {
        this.itemMap.forEach((todo) => {
            if (todo.complete) {
                this.itemMap.delete(todo.id);
            }
        });
    }
    getItemCount() {
        return {
            total: this.itemMap.size,
            incomplete: this.getTodoItems(false).length,
        };
    }
}
