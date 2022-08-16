import "./sidebar.css"
// import axios from 'axios';
import { Link } from "react-router-dom";
import { axiosInstance } from "../../config";
import { useEffect, useState } from "react";
import AuthorImage from '../../images/author-image.jpg';

const Sidebar = () => {
    const [categories, setCategories] = useState([])

    useEffect(() => {
      const getCategories = async () => {
          const res = await axiosInstance.get("/categories")
          setCategories(res.data)
      }
      getCategories()
    }, [])
    
  return (
    <>
        <aside className="col-md-3 blog-sidebar">
            <div className="p-4 mb-3 bg-light rounded">
                <h1 className="fst-italic mb-4 fs-1 sidebar-heading">The Author</h1>
                <img src={AuthorImage} alt="Author Profile" className="rounded-circle img-fluid mb-4 px-5"/>
                <p className="mb-0 fs-4">Etiam porta <em>sem malesuada magna</em> mollis euismod. 
                    Cras mattis consectetur purus sit amet fermentum. Aenean lacinia bibendum nulla sed consectetur.</p>
            </div>
            <div className="p-3">
                <h1 className="fst-italic fs-1 sidebar-heading">Categories</h1>
                <div className="d-grid gap-2 mt-4">
                    {categories.map((cats) => (
                        <Link to={`/posts/?cats=${cats.name}`} className="btn btn-outline-danger fs-3" role="button" aria-pressed="true">
                            {cats.name}
                        </Link>
                    ))}
                    {/* <a href="/#" className="btn btn-outline-success fs-3" role="button" aria-pressed="true">Yoga</a>
                    <a href="/#" className="btn btn-outline-warning fs-3" role="button" aria-pressed="true">Nutrition</a> */}
                </div>
            </div>
            <div className="p-3">
                <h1 className="fst-italic fs-1 sidebar-heading">Follow Me</h1>
                <div className="mt-4 fs-3">
                    <i className='fab fa-facebook-square me-3'></i>
                    <i className='fab fa-twitter-square me-3'></i>
                    <i className='fab fa-instagram-square'></i>
                </div>
            </div>
        </aside>
    </>
  )
}

export default Sidebar