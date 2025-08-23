















import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import {fetchTasks} from '../utils/requestAPI'

// 使用 createSlice 创建一个名为 tasksSlice 的切片


//thunk 处理异步操作

export const loadTasks = createAsyncThunk ('tasks/load', async()=>{

    const tasks = await fetchTasks();  //自动生成三个状态， pending, fulfilled, rejected
    return tasks;

}
)


const tasksSlice = createSlice({

    // 切片的名字，在 Redux store 中作为命名空间
    name:'tasks',

    // 定义初始状态对象
    initialState:{
        items:[],        // 存放所有任务的数组
        filter:'All',    // 当前的任务筛选条件，默认显示“全部任务”
        loading:false,   // 标记是否正在加载任务数据
        error:null       // 存储错误信息，默认没有错误
    },

    // 定义同步的 reducer 方法
    reducers:{

        // 添加任务
        addTask:(state, action)=>{
            // action.payload 表示传进来的新任务对象
            // state.items 表示任务数组
            // push() 的作用是把新任务对象加到数组最后
            state.items.push(action.payload);
        },

        // 切换任务是否完成
        toggleDone:(state, action)=>{
            // 在 state.items 数组中查找任务，条件是任务的 id 等于 action.payload
            const task = state.items.find(t=>t.id === action.payload)    //注意，这里是要t.id === action.payload
            if(task){
                // 如果找到对应任务，就把任务的 done 属性取反
                // 如果原来是 true(已完成)，就改为 false(未完成)
                // 如果原来是 false(未完成)，就改为 true(已完成)
                task.done = !task.done;
            }
        },

        // 设置过滤条件
        setFilter:(state,action)=>{
            // action.payload 是新的过滤条件，比如 "Completed" 或 "Active"
            // 把 state.filter 更新为新的值
            state.filter= action.payload;
        }
    },

    extraReducers:(builder)=>{
        builder
        .addCase(loadTasks.pending,(state)=>{
            state.loading=true;
            state.error = null;
        })
        .addCase(loadTasks.fulfilled, (state,action)=>{
            state.loading=false;
            state.items = action.payload;
        })


        .addCase(loadTasks.rejected, (state, action)=>{
            state.loading=false;
            state.error= action.payload.message;
        })
    }

})


export const{addTask, toggleDone, setFilter} = tasksSlice.actions;

export default tasksSlice.reducer;