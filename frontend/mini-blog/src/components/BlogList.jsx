


import React from 'react'

import BlogPost from './BlogPost'

const BlogList = ({posts,onDelete}) => {


    if (posts.length === 0) return <p className='no-posts'> No posts yet.</p>



    return (
    <div className='blog-list'>
        {posts.map(post=>(
       //把posts里每一项post都传给blogpost组件里，左边是属性

       <BlogPost key={post.id} id={post.id} title= {post.title} content= {post.content} onDelete={onDelete}/>
        ))}
        
        BlogList</div>

)
}

export default BlogList