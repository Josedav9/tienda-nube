export class UnexpectedError extends Error {
  constructor() {
    super("Something wrong happened. Try again in a few minutes.");
    this.name = "UnexpectedError";
  }
}
