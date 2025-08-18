

// 一般utils是放一些单独的functions，比如blog api

















let posts = [
    {
        id:1,
        title:" welcome to the blog ",
        content:"This is the first post!"
    }
];


// simulate GET 


export const fetchPosts =  ()=>{

    return new Promise ((resolve)=>{
        setTimeout(()=>{
            resolve([...posts])
        },1000)
    })
}

// 因为用了人造的异步（非时间同步）setTimeout 所以必须用promise（异步操作）去包裹他
// resolve这里等于return




// simulate POST

export const addPosts = (newPost)=>{
    return new Promise((resolve)=>{
        setTimeout(() => {
            const  postWithId ={...newPost, id:Date.now()};
            posts.push(postWithId);
            resolve(postWithId)
            
        }, 500);
    })
}



// simulate DELETE 

export const deletePost=(id)=>{
    return new Promise ((resolve)=>{
        setTimeout(() => {
            posts = posts.filter(post=>post.id !==id)
            resolve(posts)
            
        }, 500);
    })
}