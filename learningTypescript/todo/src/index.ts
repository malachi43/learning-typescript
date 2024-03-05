import { TodoCollection } from "./todoCollection.js";
import { TodoItem } from "./todoItem.js";
import inquirer from "inquirer";

//TODO:
//Use persistent storage (yet to be added)

const todos = [
  new TodoItem(1, "walk dog"),
  new TodoItem(2, "feed lion"),
  new TodoItem(3, "Buy Flowers", true),
  new TodoItem(4, "Get Shoes"),
  new TodoItem(5, "Collect Tickets"),
  new TodoItem(6, "Call Joe"),
  new TodoItem(7, "go hiking", true),
];

enum Commands {
  Add = "Add New Task",
  Toggle = "Show/Hide Completed.",
  Quit = "Quit",
  Purge = "Remove completed",
  Complete = "Mark as completed",
}

let showCompleted = true;

const todoCollection = new TodoCollection("malachi", todos);

function displayTodoList(): void {
  console.log(
    `${todoCollection.userName.toUpperCase()}'s Todo List (${
      todoCollection.getItemCount().incomplete
    } items todo)`
  );
  todoCollection
    .getTodoItems(showCompleted)
    .forEach((todo) => todo.printDetails());
}

function promptAdd(): void {
  inquirer
    .prompt({
      type: "input",
      name: "add",
      message: "Enter task:",
    })
    .then((answers) => {
      if (answers["add"] !== "") {
        todoCollection.addTodo(answers["add"]);
        promptUser();
      }
    });
}

function promptComplete() {
  inquirer
    .prompt({
      type: "checkbox",
      name: "complete",
      message: "Mark Complete",
      choices: todoCollection.getTodoItems(true).map((todo) => ({
        name: todo.task,
        value: todo.id,
        checked: todo.complete,
      })),
    })
    .then((answers) => {
      let selectedTask = answers["complete"] as number[];
      todoCollection.getTodoItems(true).forEach((todo) => {
        todoCollection.markComplete(
          todo.id,
          selectedTask.find((id) => id === todo.id) !== undefined
        );
      });
      promptUser();
    });
}

function promptUser(): void {
  console.clear();
  displayTodoList();
  inquirer
    .prompt({
      type: "list",
      name: "command",
      message: "Choose Option",
      choices: Object.values(Commands),
    })
    .then((answers) => {
      switch (answers["command"]) {
        case Commands.Toggle: {
          showCompleted = !showCompleted;
          promptUser();
          return;
        }
        case Commands.Add: {
          promptAdd();
          return;
        }
        case Commands.Complete: {
          promptComplete();
          return;
        }
        case Commands.Purge: {
          todoCollection.removeComplete();
          promptUser();
          return;
        }
      }
    });
}

promptUser();
