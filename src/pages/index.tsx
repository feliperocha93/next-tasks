import { useState } from 'react';

import List from '../components/list/List';
import Content from '../components/template/Content';
import Header from '../components/template/Header';
import initialTasks from '../data/mock';

export default function Home() {
  const [tasks, setTasks] = useState(initialTasks);

  return (
    <div className={`flex flex-col h-screen bg-gray-300`}>
      <Header>
        <h1>TODO</h1>
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
