import initialTasks from '../data/mock';
import Task from '../model/Task';

export default function Home() {
  let tasks = initialTasks;

  function renderTasks() {
    return tasks.items.map(t => {
      return (
        <div key={t.id}> 
          <span>{t.id} | </span>
          <span>{t.description} | </span>
          <span>{t.done ? 'Done' : 'Active'}</span>
        </div>
      );
    });
  }


  return (
    <div className={`
      flex
      flex-col
      justify-center
      items-center
      text-white
      bg-gradient-to-tr
      from-purple-500
      to-yellow-600
      h-screen
      text-2xl
    `}>
      {renderTasks()}
    </div>
  )
}
