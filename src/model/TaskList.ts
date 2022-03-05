import Task from "./Task";
import TypeFilter from "./TypeFilter";

class TaskList {
  #all: Task[];
  #filter: TypeFilter

  constructor(all: Task[], filter = TypeFilter.NONE) {
    this.#all = all;
    this.#filter = filter;
  }

  get items() {
    return this.applyFilter(this.#all);
  }

  get quantity() {
    return this.items.length;
  }

  get filter() {
    return this.#filter;
  }

  addTask(newTask: Task): TaskList {
    const tasks = [...this.#all];
    tasks.push(newTask);
    return new TaskList(tasks, this.#filter);
  }

  updateTask(task: Task): TaskList {
    const tasks = this.#all.map(t => {
      return t.id === task.id ? task : t;
    });
    return new TaskList(tasks, this.#filter);
  }

  filterActive() {
    if (!this.isDisplayingActive()) {
      return new TaskList(this.#all, TypeFilter.ACTIVE);
    }

    return this;
  }

  filterDone() {
    if (!this.isDisplayingDone()) {
      return new TaskList(this.#all, TypeFilter.DONE);
    }

    return this;
  }

  removeDone() {
    return new TaskList(this.#all.filter(t => !t.done));
  }

  removeFilter() {
    if (!this.isDisplayingAll()) {
      return new TaskList(this.#all, TypeFilter.NONE);
    }

    return this;
  }

  isDisplayingAll(): boolean {
    return this.#filter === TypeFilter.NONE;
  }

  isDisplayingActive(): boolean {
    return this.#filter === TypeFilter.ACTIVE;
  }

  isDisplayingDone(): boolean {
    return this.#filter === TypeFilter.DONE;
  }

  applyFilter(tasks: Task[]): Task[] {
    switch (true) {
      case this.isDisplayingActive():
        return this.applyActiveFilter(tasks);
      case this.isDisplayingDone():
        return this.applyDoneFilter(tasks);
      default:
        return [...tasks];
    }
  }

  applyActiveFilter(tasks: Task[]): Task[] {
    return tasks.filter(task => !task.done);
  }

  applyDoneFilter(tasks: Task[]): Task[] {
    return tasks.filter(task => task.done);
  }
}

export default TaskList;