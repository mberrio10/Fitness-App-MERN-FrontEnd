// import axios from 'axios'
import { useContext, useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { axiosInstance } from '../../config'
import { Context } from '../../context/Context'
import './singleArticle.css'

const SingleArticle = () => {
    const [article, setArticle] = useState({})
    const location = useLocation()
    const path = location.pathname.split("/")[2];
    const PF = 'http://localhost:5000/images/'
    const {user} = useContext(Context)
    const [title, setTitle] = useState('')
    const [desc, setDesc] = useState('')
    const [updateMode, setUpdateMode] = useState(false)

    useEffect(() => {
      const fetchPost = async () => {
        const res = await axiosInstance.get("/posts/"+path)
        setArticle(res.data)

        setTitle(res.data.title)
        setDesc(res.data.desc)
      }
      fetchPost()
    }, [path]);

    const handleDelete = async () => {
      try {
        await axiosInstance.delete(`/posts/${article._id}`, {data:{username:user.username}})
        window.location.replace('/posts')
      } catch (error) {}
    }
    
    const handleUpdate = async () => {
      try {
        await axiosInstance.put(`/posts/${article._id}`, {
          username:user.username, 
          title, 
          desc
        })
        // setUpdateMode(false)
        window.location.reload()
      } catch (error) {}
    }

  return (
    <div className='single-article d-flex flex-column'>
      {updateMode ? (
        <input type="text" className='update-title' value={title} autoFocus onChange={(e) => setTitle(e.target.value)} /> ) : (
        <h1 className="pb-3 mb-4 fw-bold border-bottom article-heading-primary d-flex justify-content-between">
          {title}
          {article.username === user?.username && (
            <div>
              <i className="fa-solid fa-pen-to-square me-4" onClick={()=>setUpdateMode(true)}></i>
              <i className="fa-solid fa-trash-can" onClick={handleDelete}></i>
            </div>
          )}
        </h1>
      )}
      <div>
        <p className="fs-5 fst-italic pb-1">{new Date(article.createdAt).toDateString()} by <Link to={`/posts/?user=${article.username}`}>{article.username}</Link></p>
        {article.photo && (<img src={PF + article.photo} alt="" className="rounded float-start article-img" />)}
        <figure className='article-highlight'>
          <blockquote className="article-highlight-text fs-1">
            Sed mi augue, placerat nec vehicula vitae, porta vitae odio. Donec nec libero sed risus varius placerat. 
            Proin ligula est, ultricies vel velit non, lobortis molestie magna.
          </blockquote>
        </figure>
      </div>
      {updateMode ? (
        <textarea className='update-desc fs-2 font-monospace' value={desc} onChange={(e) => setDesc(e.target.value)}/> 
      ) : (
        <p className='fs-2 font-monospace'>
          {desc}
        </p>
      )}
      {updateMode && (
        <button type='button' className="btn btn-sm btn-outline-success update-button mt-3" onClick={handleUpdate}>Save</button>
      )}
    </div>
  )
}

export default SingleArticle