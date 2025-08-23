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

    <TaskListWrapper>
    
    {filtered.map(task=>(

      <TaskItem
      key = {task.id}
      $done = {task.done}
      onClick ={()=>dispatch(toggleDone(task.id))}
      >

      </TaskItem>



    ))}

    
    </askListWrapper>
  )
}

export default TaskList