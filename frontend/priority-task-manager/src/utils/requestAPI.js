
















const fakeTasks = [


    {
        id:1, text:'Learn React',done:false},
    

        {id:2, test:'Write Unit Tests', done:true},

        {id:3, text:'Use Redux', done:false},


];


export function fetchTasks(){
    return new Promise ((resolve)=>{
        setTimeout(()=>{

            resolve (fakeTasks)

        },1000);
    });
}