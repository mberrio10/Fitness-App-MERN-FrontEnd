import './article.css'
// import axios from 'axios'
import { axiosInstance } from '../../config';
import { useState, useEffect } from "react";
import Banner from '../../components/banners/Banners'
import LatestPosts from '../../components/latestPosts/LatestPosts'
import OtherPosts from '../../components/otherposts/OtherPosts'
import Sidebar from '../../components/sidebar/Sidebar'
import SingleArticle from '../../components/singleArticle/SingleArticle'

const Article = () => {
    const [randomPosts, setRandomPosts] = useState([])

    useEffect(() => {
        const fetchPosts = async () => {
            const res = await axiosInstance.get('/posts')
            setRandomPosts(res.data)
        }
        fetchPosts ()
    }, [])
    
    const randomPost = randomPosts.sort(() => 0.5 - Math.random()).slice(0, 3)

  return (
    <>
        <Banner />
        <div className='article'>
            <LatestPosts />
            <div className="container p-0 pt-5 px-5">
                <div className="row g-5 px-5 pt-5 justify-content-between">
                    <div className="col-md-9">
                        <SingleArticle />
                        <div className='other-posts'>
                            <h3 className="fst-italic mt-5 fs-2 fw-bold other-heading-tertiary">Other Posts</h3>
                            <hr/>
                            <div className="row">
                                {randomPost.map((otherPosts) => (
                                    <OtherPosts random={otherPosts}/>
                                ))}
                            </div>
                        </div>
                    </div>
                    <Sidebar />
                </div>
            </div>
        </div>
    </>
  )
}

export default Article