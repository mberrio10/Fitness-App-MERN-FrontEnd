// import axios from 'axios'
import { axiosInstance } from '../../config'
import { useContext, useState } from 'react'
import { Context } from '../../context/Context'
import './create.css'

const Create = () => {
  const [title, setTitle] = useState("")
  const [desc, setDesc] = useState("")
  const [file, setFile] = useState(null)
  const {user} = useContext(Context) 

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newPost = {
      username: user.username,
      title,
      desc
    }

    if (file) {
      const data = new FormData();
      const filename = Date.now() + file.name;
      data.append('name', filename);
      data.append('file', file);
      newPost.photo = filename;

      try {
        await axiosInstance.post('/upload', data) 
      } catch (error) {
        
      }
    }
    try {
      const res = axiosInstance.post('/posts', newPost)
      window.location.replace('/posts/' + res.data._id)
    } catch (error) {
      
    }
  }


  return (
    <>
      <div className='create'>
        {file && <img src={URL.createObjectURL(file)} alt="Created Composition" className="create-img" />}
      <form className='create-form' onSubmit={handleSubmit}>
          <div className="create-form-group">
            <label htmlFor="file-input">
              <i className="add-icon fa-solid fa-plus"></i>  
            </label>
            <input type="file" id='file-input' style={{display:"none"}} onChange={(e) => setFile(e.target.files[0])}/>
            <input type="text" placeholder='Title' className='create-input create-title' autoFocus={true} onChange={(e) => setTitle(e.target.value)} />
          </div>
          <div className="create-form-group">
            <textarea placeholder='Write your post...' type="text" className='create-input write-text' cols="30" rows="10" onChange={(e) => setDesc(e.target.value)}></textarea>
          </div>
          <button className="create-submit" type='submit'>Publish</button>
        </form>
      </div>
    </>
  )
}

export default Create