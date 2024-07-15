import "./posts.css";
// import axios from "axios";
import { axiosInstance } from "../../config";
import { useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import Banners from "../../components/banners/Banners";
import FeaturePost from "../../components/featurepost/FeaturePost";
import OtherPosts from "../../components/otherposts/OtherPosts";
import Post from "../../components/post/Post";
import Sidebar from "../../components/sidebar/Sidebar";

const Posts = () => {
  const [posts, setPosts] = useState([]);
  const [randomPosts, setRandomPosts] = useState([]);
  const { search } = useLocation();
  console.log(search);

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await axiosInstance.get("/posts" + search);
      setPosts(res.data);
    };
    fetchPosts();
  }, [search]);

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await axiosInstance.get("/posts");
      setRandomPosts(res.data);
    };
    fetchPosts();
  }, []);

  const randomPost = randomPosts.sort(() => 0.5 - Math.random()).slice(0, 3);

  return (
    <>
      <Banners />
      <div className="posts">
        <div className="row g-5 justify-content-between">
          <div className="col-md-9">
            {posts.slice(-1).map((featured) => (
              <FeaturePost post={featured} />
            ))}
            <div className="post">
              <h1 className="pb-3 mb-4 fs-1 fst-italic fw-bold border-bottom border-secondary post-heading-primary">
                Latest Posts
              </h1>
              {posts.slice(-4, -1).map((p, index) => (
                <Post post={p} index={index} />
              ))}
            </div>
            <div className="other-posts">
              <h3 className="fst-italic mt-5 fs-2 fw-bold other-heading-tertiary">
                Other Posts
              </h3>
              <hr />
              <div className="row">
                {randomPost.map((otherPosts) => (
                  <OtherPosts random={otherPosts} />
                ))}
              </div>
            </div>
          </div>
          <Sidebar />
        </div>
      </div>
    </>
  );
};

export default Posts;
