import Task from "../model/Task";
import TaskList from "../model/TaskList";
import TypeFilter from "../model/TypeFilter";

const initialTasks: Task[] = [
  Task.createActive(1, 'Study Next'),
  Task.createDone(2, 'Wash the car'),
  Task.createActive(3, 'Buy the book of the month'),
];

export default new TaskList(initialTasks, TypeFilter.NONE);