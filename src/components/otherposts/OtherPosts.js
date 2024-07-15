// import dumbbellPic from '../../images/dumbbell-dark.jpg'
// import girlDumbbells from '../../images/girl-dumbbells.jpg'
// import girlBackBar from "../../images/girl-back-bar.jpg";
import "./otherPosts.css";

const OtherPosts = ({ random }) => {
  const PF = "http://localhost:5000/images/";

  return (
    <>
      <div className="col-md-4 mt-2 mb-4">
        <div className="card border-0">
          <img
            src={PF + random.photo}
            alt="The Post"
            className="card-img-top"
          />
          <div className="text-center card-body">
            <h5 className="card-title fw-bold fs-4 other-small-heading">
              {random.title}
            </h5>
            <p className="card-text fs-5">
              {random.desc.length > 375
                ? random.desc.substring(0, 375) + " ..."
                : random.desc}
            </p>
            <a href="/#" className="btn btn-primary fs-5">
              Read More
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default OtherPosts;
