// import GirlsquatVer from "../../images/vertical-girlsquat.jpg";
// import YogaposeVer from "../../images/vertical-yogapose.jpg";
// import NutritionVer from "../../images/vertical-nutrition.jpg";
import "./latestPosts.css";

import React from "react";
import { Link } from "react-router-dom";

const LatestPosts = ({ posts }) => {
  const PF = "http://localhost:5000/images/";

  return (
    <>
      <div className="col-md-4">
        <div className="row g-0 border rounded overflow-hidden flex-md-row align-content-center mb-4 h-md-250 position-relative">
          <div className="col p-4 d-flex flex-column justify-content-md-center position-static">
            <strong className="d-inline-block mb-2 text-danger">
              Work Out
            </strong>
            <h3 className="mb-0 fs-2">{posts.title}</h3>
            <div className="mb-1 text-muted">09/22</div>
            <p className="card-text fs-4">
              {posts.desc.length > 93
                ? posts.desc.substring(0, 93) + " ..."
                : posts.desc}
            </p>
            <Link to={`/posts/${posts._id}`} className="stretched-link">
              Continue reading
            </Link>
          </div>
          <div className="col-auto">
            <img src={PF + posts.photo} alt="" className="img-homeBlog" />
          </div>
        </div>
      </div>
      {/* <div className="col-md-4">
        <div className="row g-0 border rounded overflow-hidden flex-md-row align-content-center mb-4 h-md-250 position-relative">
          <div className="col col p-4 d-flex flex-column justify-content-md-center position-static">
            <strong className="d-inline-block mb-2 text-success">Yoga</strong>
            <h3 className="mb-0 fs-2">All About Yoga Flow</h3>
            <div className="mb-1 text-muted">09/22</div>
            <p className="card-text fs-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
              volutpat ut nunc at ultricies.
            </p>
            <a href="/#" className="stretched-link">
              Continue reading
            </a>
          </div>
          <div className="col-auto">
            <img src={YogaposeVer} alt="" className="img-homeBlog" />
          </div>
        </div>
      </div>
      <div className="col-md-4">
        <div className="row g-0 border rounded overflow-hidden flex-md-row align-content-center mb-4 h-md-250 position-relative">
          <div className="col col p-4 d-flex flex-column justify-content-md-center position-static">
            <strong className="d-inline-block mb-2 text-warning">
              Nutrition
            </strong>
            <h3 className="mb-0 fs-2">Eating Enough Protein</h3>
            <div className="mb-1 text-muted">09/22</div>
            <p className="card-text fs-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
              volutpat ut nunc at ultricies.
            </p>
            <a href="/#" className="stretched-link">
              Continue reading
            </a>
          </div>
          <div className="col-auto d-none d-lg-block">
            <img src={NutritionVer} alt="" className="img-homeBlog" />
          </div>
        </div>
      </div> */}
    </>
  );
};

export default LatestPosts;
