import './settings.css'
// import axios from 'axios'
import {Context} from '../../context/Context'
import { axiosInstance } from '../../config'
import { useContext, useState } from 'react'
import Sidebar from '../../components/sidebar/Sidebar'

const Settings = () => {
    const [file, setFile] = useState(null)
    const [username, setUsername] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [success, setSuccess] = useState(false)

    const {user, dispatch} = useContext(Context)
    const PF = 'http://localhost:5000/images/'
    
    const handleSubmit = async (e) => {
        e.preventDefault();
        dispatch({type:'UPDATE_START'})
        const updatedUser = {
          userId: user._id,
          username,
          email,
          password
        }
    
        if (file) {
          const data = new FormData();
          const filename = Date.now() + file.name;
          data.append('name', filename);
          data.append('file', file);
          updatedUser.profilePic = filename;

          try {
            await axiosInstance.post('/upload', data) 
          } catch (error) {
            
          }
        }
        try {
          const res = await axiosInstance.put('/users/' + user._id, updatedUser)
          setSuccess(true)
          dispatch({type:'UPDATE_SUCCESS', payload: res.data})
        } catch (error) {
          dispatch({type: 'UPDATE_FAILURE'})
        }
      }
    
  return (
    <section className='settings'>
      <div className="settings-container container-fluid">
        <div className="row">
          <div className="col-md-9">
            <div className="settings-title d-flex align-items-center justify-content-between">
              <span className="settings-update-title display-4 pb-5">Update Your Account</span>
              <span className="settings-delete-title fs-5">Delete Account</span> 
            </div>
            <form action="" className="settings-form d-flex flex-column" onSubmit={handleSubmit}>
              <label>Profile Picture</label>
              <div className="settings-pp d-flex align-items-center py-3 px-0">
                <img src={file ? URL.createObjectURL(file) : PF + user.profilePic} className='img-fluid rounded' alt="Update" />
                <label htmlFor="file-input">
                  <i className='settings-pp-icon ms-3 fa-solid fa-circle-user'></i>
                </label>
                <input type="file" id='file-input' style={{display:"none"}} onChange={(e) => setFile(e.target.files[0])}/>
              </div>
              <label>Username</label>
              <input type="text" placeholder={user.username} onChange={e=>setUsername(e.target.value)}/>
              <label>Email</label>
              <input type="email" placeholder={user.email} onChange={e=>setEmail(e.target.value)}/>
              <label>Password</label>
              <input type="password" onChange={e=>setPassword(e.target.value)}/>
              <button className="settings-submit p-2 mt-4" type='submit'>Update</button>
              {success && <span className='text-center text-success pt-3'>Profile  has been Updated!</span>}
            </form>
          </div>
          <Sidebar />
        </div>
      </div>
    </section>
  )
}

export default Settings