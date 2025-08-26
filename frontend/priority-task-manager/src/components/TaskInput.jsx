import React from 'react'
import { Input, Button, Select, InputArea } from './styles/style'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addTask } from '../redux/taskSlice'

const TaskInput = () => {

  const [text, setText] = useState('');
  const [done, setDone] = useState(false);
  const tasks = useSelector(state => state.tasks.items)
  const dispatch = useDispatch();
  const handleAdd = () => {
    if (!text.trim()) return;
    const maxId = tasks.length > 0 ? Math.max(...tasks.map(t => t.id)) : 0;
    const newId = maxId + 1;
    dispatch(addTask({ id: newId, text, done }))
    setText('')
    setDone(false)
  }
  return (

    <InputArea>
      <Input
      data-testid='task-input'
        value={text}
        placeholder='Enter task...'
        onChange={e => setText(e.target.value)}


      />

      <Select

        value={done ? 'Done' : 'Not Done'}
        onChange={e => setDone(e.target.value === 'Done')}
        data-testid = 'status-select'
      >

        <option value="Not Done">Not Done</option>
        <option value="Done">Done</option>


      </Select>

      <Button
        onClick={handleAdd}> Add</Button>

    </InputArea>










  )
}

export default TaskInput