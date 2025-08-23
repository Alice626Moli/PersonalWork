












import React from 'react'
import { setFilter } from '../redux/taskSlice';
import {useDispatch} from 'react-redux';
import {Select} from './styles/style'

const FilterBar = () => {

  const dispatch = useDispatch();
  const handleChange = (e)=>{
    dispatch(setFilter(e.target.value))

  }

  return (
  
    <Select onChange = {handleChange}>


<option value='All'>
  All

</option>

<option value='Done'>
  Done
  
</option>



<option value = 'Not Done'>
  Not Done
  
</option>


    </Select>
  )
}

export default FilterBar