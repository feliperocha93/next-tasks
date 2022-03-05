class Task {
  #id: number;
  #description: string;
  #done: boolean;

  constructor(
    id: number,
    description: string,
    done = false
  ) {
    this.#id = id;
    this.#description = description,
    this.#done = done
  }

  static createActive(id: number, description: string) {
    return new Task(id, description);
  }

  static createDone(id: number, description: string) {
    return new Task(id, description, true);
  }

  get id() {
    return this.#id;
  }

  get description() {
    return this.#description;
  }

  get done() {
    return this.#done;
  }

  changeStatus() {
    return this.#done ? this.active() : this.do();
  }

  do() {
    return Task.createDone(this.#id, this.#description);
  }

  active() {
    return Task.createActive(this.#id, this.#description);
  }
}

export default Task;