import React from "react";
// import { useState, useEffect } from "react";
// import axios from "axios";
import "./home.css"
import Trainer from '../../images/trainer.jpg';
import Header from "../../components/header/Header";
import Features from "../../components/features/Features";
import OnlineClasses from "../../components/onlineClasses/OnlineClasses";
import PricePlans from "../../components/pricePlans/PricePlans";
import Subscribe from "../../components/subscribe/Subscribe";
import LatestPosts from '../../components/latestPosts/LatestPosts';

const Home = () => {
  // const [posts, setPosts] = useState([])

  // useEffect(() => {
  //   const fetchPosts = async () => {
  //     const res = await axios.get('/posts')
  //     setPosts(res.data)
  //     console.log(res);
  //   }
  //   fetchPosts ()
  // }, [])
  
  return (
    <>
      <Header />
      <main className="home">
        <section className="about">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-md-6">
                <h4 className="fs-1 subtitles">Meet Your Trainer</h4>
                <h3 className="text-capitalize display-5 py-3 heading-tertiary">daily workouts and get stronger</h3>
                <p className="lead fs-3 lh-lg">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Delectus quae inventore molestiae accusamus facere ducimus, magni quidem cumque debitis sed beatae totam, culpa dolore voluptatum incidunt hic quia, mollitia fugit?</p>
                <ul className="list-unstyled ps-5">
                  <li className="pt-4 fs-3 text-capitalize"> <i className="far fa-check-square about-icon"></i>How to gain strength and still look beautiful</li>
                  <li className="pt-4 fs-3 text-capitalize"> <i className="far fa-check-square about-icon"></i>30 Day Fitness & Workout Challenges</li>
                  <li className="pt-4 fs-3 text-capitalize"> <i className="far fa-check-square about-icon"></i>Daily guides on how to sculpt a beautiful body while getting stronger</li>
                  <li className="pt-4 fs-3 text-capitalize"> <i className="far fa-check-square about-icon"></i>The Mental Health Benefits of strength workout articles</li>
                </ul>
              </div>

              <div className="col-md-6 text-center">
                <img src={Trainer} className="w-50" alt="The Trainer" />
              </div>
            </div>
          </div>
        </section>

        <section className="features">
          <Features />
        </section>

        <section className="online-classes">
          <OnlineClasses />
        </section>

        <section className="price-plans">
          <PricePlans />
        </section>

        <section className="subscribe">
          <Subscribe />
        </section>

        <section className="blog-home">
          <LatestPosts />
        </section>

      </main>
    </>
  )
}

export default Home