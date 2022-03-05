import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';
import Task from '../../model/Task';

interface FormProps {
  setNewTask: (task: Task) => void;
}

function Form(props: FormProps) {
  const [description, setDescription] = useState('');

  function addNewTask() {
    if(description?.trim().length > 0) {
      props.setNewTask(Task.createActive(Math.random(), description));
      setDescription('');
    }
  }

  return (
    <div className='flex flex-1 justify-center'>
      <input
        type='text'
        value={description}
        placeholder="Input the next task"
        onChange={e => setDescription(e.target.value)}
        onKeyDown={e => e.key === 'Enter' ? addNewTask() : false}
        className={`
          w-1/2 py-2 px-3 rounded-lg border-2 text-3xl
          border-purple-300 focus:outline-none
          focus:ring-2 focus:ring-purple-600
        `}
      />
      <button
        onClick={addNewTask}
        className={`
          ml-3 px-5 py-4 focus:outline-none rounded-lg
          bg-purple-600 text-white text-xl
        `}
      >
        <FontAwesomeIcon icon={faPlus}/>
      </button>
    </div>
  );
}

export default Form;
