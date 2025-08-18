











import React, {useState} from 'react'

const BlogForm = ({onAdd}) => {

  const[post,setPost]= useState({title:'', content:''})
  const handleSubmit= (e)=>{
    e.preventDefault();
    if(post.title && post.content){
      onAdd(post)
      setPost({title:'',content:''})  //这一部是add以后清空post
    }


  }

  const handleChange =(e)=>{

    //使用[name]动态更新object key对应value,通过 setPost保存拿到最新状态
    const{name, value} = e.target;
    setPost({...post, [name]:value})

  }

  console.log('post',post)
  return (

    <form className='blog-form' onSubmit= {handleSubmit}>
      
      {/* //用户输入的值必须通过state管理，这是react form的推荐方式 */}

      <input name='title' type="text" placeholder='Title' value= {post.title} onChange={handleChange} />
      <textarea name="content" placeholder='Content' value={post.content} onChange={handleChange}/>
      <button className='blog-button' type='submit'> Add Post</button>
      
      </form>
  )
}

export default BlogForm