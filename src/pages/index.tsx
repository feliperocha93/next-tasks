import { useState } from 'react';

import List from '../components/list/List';
import initialTasks from '../data/mock';

export default function Home() {
  const [tasks, setTasks] = useState(initialTasks);

  return (
    <div className={`
      flex flex-col justify-center items-center h-screen
      bg-gray-300
    `}>
      <List tasks={tasks} handleChange={(newTasks) => setTasks(newTasks)} />
    </div>
  )
}
