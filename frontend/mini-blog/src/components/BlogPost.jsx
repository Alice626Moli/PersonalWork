




import React from 'react'

const BlogPost = ({id,title,content,onDelete}) => {
  return (
    <div className='post'>
        
        <h2 className='post-title'>{title}</h2>

        <p className='post-content'>{content}</p>
        <button className="post-delete-button" onClick = {()=>onDelete(id)}> Delete</button>
        
        BlogPost</div>
  ) 
}

export default BlogPost