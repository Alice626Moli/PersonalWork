
























import { useState,useEffect } from 'react';
import './style.scss';
import { fetchPosts, deletePost,addPost } from './utils/blogApi';
import BlogList from './components/BlogList';
import BlogForm from './components/BlogForm';


function App() {


  const [posts, setPosts] = useState([]);
const [error, setError] = useState('')
const [isLoading, setIsLoading] = useState(true)


  useEffect (()=>{
    //组件加载时执行一次


    const loadPosts = async()=>{
      try {
        const data = await fetchPosts()
        setPosts(data)
        setIsLoading(false)
      } catch (error) {
        setError('Failed to load posts, Please try again later.')
        setIsLoading(false)
      }
    }
    loadPosts();

  },[]) //空[]的话，只有在page rendering时只触发一次

  const handleDeletePost = async(id)=>{
   
   
    try {
      const filteredPosts = await deletePost(id)
  
      // setPosts((prev)=>prev.filter(p=>p.id !==id))

      setPosts([...filteredPosts])
    } catch (error) {

      setError('Failed to delete post.')
      
    }
  }

  const handleAddPost= async(post)=>{

    try {
      const newPost = await addPost();
      setPosts([...posts,newPost])
      
    } catch (error) {
      setError('Failed to add post')
    }
  }



  return (
    <div className='container'>
      <h1>Mini Blog</h1>

      {error && <p className='error'>{error} </p>}

      <BlogForm onAdd =  {handleAddPost}/>
      
      {/* //如果laoding，显示loading信息，如果不loading，显示bloglist */}
      {isLoading 
      ? 
      <p> Loading Posts....</p>
      :
       <BlogList posts = {posts} onDelete= {handleDeletePost} />    
      }
   
      {/* //<BlogList post='123' /> */}
      

    </div>
  )
}

export default App
