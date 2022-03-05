import { useState } from 'react';
import Form from '../components/form/Form';

import List from '../components/list/List';
import Content from '../components/template/Content';
import Header from '../components/template/Header';
import initialTasks from '../data/mock';
import Task from '../model/Task';

export default function Home() {
  const [tasks, setTasks] = useState(initialTasks);

  function setNewTask(newTask: Task) {
    setTasks(tasks.addTask(newTask));
  }

  return (
    <div className={`flex flex-col h-screen bg-gray-300`}>
      <Header>
        <Form setNewTask={setNewTask} />
      </Header>

      <Content>
        <List
          tasks={tasks}
          handleChange={(newTasks) => setTasks(newTasks)}
        />
      </Content>
    </div>
  )
}
