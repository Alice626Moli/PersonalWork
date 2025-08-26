import React from 'react'
import {useSelector,useDispatch} from 'react-redux'
import { TaskItem, TaskListWrapper } from './styles/style';
import { toggleDone } from '../store/tasksSlice'; // Make sure this path is correct

const TaskList = () => {


  const dispatch = useDispatch();
  const {items, filter} = useSelector(state=>state.tasks);


  const filtered = items.filter(task=>{
    if(filter === 'Done') return task.done;
    if(filter === 'Not Done') return !task.done;
    return true;
  })

  return (
    <TaskListWrapper>
      {filtered.map(task => (
        <TaskItem
          key={task.id}
          $done={task.done}
          onClick={() => dispatch(toggleDone(task.id))}
          data-testid='task-item'
        >
          {task.text}
        </TaskItem>
      ))}
    </TaskListWrapper>
  );
}

export default TaskList