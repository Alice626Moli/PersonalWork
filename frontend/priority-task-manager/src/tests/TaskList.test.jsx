import '@testing-library/jest-dom';
import{render, screen} from '@testing-library/react';
import {Provider} from 'react-redux';
import {store} from '../redux/store';
import {addTask} from '../redux/taskSlice'
import TaskList from '../components/TaskList'

it('Render tasks from store',()=>{
    store.dispatch(addTask({id:99, text:'sample task', done:false}))

    render(
        <Provider store = {store}>

<TaskList/>

        </Provider>
    )

    expect (screen.getByText('sample task')).toBeInTheDocument();
})