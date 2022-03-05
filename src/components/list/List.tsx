import Task from "../../model/Task";
import TaskList from "../../model/TaskList";
import ListFooter from "./ListFooter";
import ListItem from "./ListItem";

interface ListProps {
  tasks: TaskList;
  handleChange: (tasks: TaskList) => void;
};

function List({tasks, handleChange}: ListProps) {  
  function changeStatus(t: Task) {
    return handleChange(tasks.updateTask(t.changeStatus()));
  }
  
  function renderTasks() {
    return tasks.items.map(t => {
      return (
        <ListItem
          key={t.id}
          value={t.description}
          done={t.done}
          changeStatus={() => changeStatus(t)}
        />
      )
    });
  }

  return (
    <div className={`
      flex w-3/5 items-start relative
    `}>

      <ul className={`
        absolute -top-14
        w-full list-none
        bg-white shadow-lg rounded-lg
      `}>
        {renderTasks()}

        <ListFooter
          tasks={tasks}
          handleChange={handleChange}
        />
      </ul>

    </div>
  );
}

export default List;
