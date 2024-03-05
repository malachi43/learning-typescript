import { TodoItem } from "./todoItem.js";

type itemCount = {
  total: number;
  incomplete: number;
};

export class TodoCollection {
  private nextId: number = 1;
  private itemMap = new Map<number, TodoItem>();

  constructor(public userName: string, todoItem: TodoItem[] = []) {
    todoItem.forEach((todo) => this.itemMap.set(todo.id, todo));
  }

  addTodo(todo: string): number {
    while (this.getTodoById(this.nextId)) {
      this.nextId++;
    }
    this.itemMap.set(this.nextId, new TodoItem(this.nextId, todo));
    return this.nextId;
  }

  getTodoById(id: number): TodoItem {
    return this.itemMap.get(id);
  }

  getTodoItems(includeComplete: boolean): TodoItem[] {
    return [...this.itemMap.values()].filter(
      (todo) => includeComplete || !todo.complete
    );
  }

  markComplete(id: number, complete: boolean) {
    const todoItem = this.getTodoById(id);
    if (todoItem) {
      todoItem.complete = complete;
    }
  }

  removeComplete(): void {
    this.itemMap.forEach((todo) => {
      if (todo.complete) {
        this.itemMap.delete(todo.id);
      }
    });
  }
  getItemCount(): itemCount {
    return {
      total: this.itemMap.size,
      incomplete: this.getTodoItems(false).length,
    };
  }


}
