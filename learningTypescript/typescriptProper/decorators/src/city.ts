import { time } from "./methodDecorator.js";
import { serialize } from "./classDecorator.js";
import { message } from "./multiples.js";

@serialize
export class City {
  constructor(public name: string, public population: number) {}

  @message("message-parameter")
  // @time
  getSummary(): string {
    return `Name:${this.name}, population:${this.population}`;
  }

  @time
  getPrice(): number {
    return Math.floor(Math.random() * 12);
  }
}
