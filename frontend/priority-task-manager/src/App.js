
import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import TaskInput from './components/TaskInput'
import TaskList from './components/TaskList'
import FilterBar from './components/FilterBar'
import { Wrapper } from './components/styles/style';
import { loadTasks } from './redux/taskSlice';



function App() {

const dispatch = useDispatch();

const {loading, error, items} = useSelector(state=>state.tasks)

useEffect(()=>{

  dispatch(loadTasks())

},[dispatch, loadTasks]) //[]里的值发生变化，则useEffect会发生变化


console.log('items',items)

  return (


    <Wrapper>


      <h1>
        Priority Task Manager
      </h1>


{loading && <p> Loading tasks....</p>}
{error && <p styled={{color:'red'}}> Error:{error}</p>}

      <TaskInput />
      <FilterBar />
      <TaskList />


    </Wrapper>




  );
}

export default App;
