import '@testing-library/jest-dom';
import{render, screen, fireEvent} from '@testing-library/react';
import {Provider} from 'react-redux';
import {store} from '../redux/store';
import {addTask} from '../redux/taskSlice';
import TaskList from '../components/TaskList';
import TaskInput from '../components/TaskInput';


const renderWithProvider = (ui)=>{
    return render (<Provider store = {store}> {ui}</Provider>)
}


describe('TaskInput Component',()=>{
    it('Add a not done task and displays it in list',()=>{

        renderWithProvider(


            <>
            
            

            <TaskInput/>
            <TaskList/>
            </>

        )

const input = screen.getByTestId('task-input');
const select = screen.getByTestId('status-select');
fireEvent.change(input,{target:{value:'Write tests'}})
fireEvent.change(select,{target:{value:'Done'}})
fireEvent.click(screen.getByText('Add'))

expect(screen.getByText('Write tests')).toBeInTheDocument();

    })




    it('Add a done task and displays it in list',()=>{

const input = screen.getByTestId('task-input');
const select = screen.getByTestId('status-select');
fireEvent.change(input, {target:{value:'Confirm tests'}});
fireEvent.change(select,{target:{value:'Not Done'}});
fireEvent.click(screen.getByText('Add'));

    })



    it('Clear input after adding task',()=>{
        renderWithProvider(<TaskInput/>)
        const input = screen.getByTestId('task-input');
        fireEvent.change(input,{target:{value:'temporary task'}});
        fireEvent.click(screen.getByText('Add'));
        expect (input.value).toBe('')

    })
})