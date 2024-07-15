// import manJarPic from "../../images/man-jar.jpg";
// import girlPlatePic from "../../images/girl-plate.jpg";
// import meditationPic from '../../images/meditation-pose.jpg'
import "./post.css";
import { Link } from "react-router-dom";

const Post = ({ post, index }) => {
  const PF = "http://localhost:5000/images/";

  if (index % 2 === 0) {
    return (
      <>
        <div className="row featurette p-3 mb-5  border-bottom">
          <div className="col-md-7">
            <h2 className="pb-3 fw-bold post-heading-secondary">
              {post.title}
            </h2>
            {post.categories.map((category) => (
              <strong className="d-inline-block mb-2 text-danger">
                {category.name}
              </strong>
            ))}
            <p className="fs-3 pb-3">
              {post.desc.length > 375
                ? post.desc.substring(0, 375) + "..."
                : post.desc}
            </p>
            <Link
              className="btn btn-link fs-4"
              to={`/posts/${post._id}`}
              role="button"
            >
              READ MORE
            </Link>
          </div>
          <div className="col-md-5">
            <img
              className="-image img-fluid rounded"
              alt="The Post"
              src={PF + post.photo}
            />
          </div>
        </div>
      </>
    );
  } else {
    return (
      <>
        <div className="row featurette p-3 mb-5  border-bottom">
          <div className="col-md-7 order-md-2">
            <h2 className="pb-3 fw-bold  post-heading-secondary">
              {post.title}
            </h2>
            {post.categories.map((c) => (
              <strong className="d-inline-block mb-2 text-danger">
                {c.name}
              </strong>
            ))}
            <p className="fs-3 pb3">
              {post.desc.length > 375
                ? post.desc.substring(0, 375) + "..."
                : post.desc}
            </p>
            <Link
              className="btn btn-link fs-4"
              to={`/posts/${post._id}`}
              role="button"
            >
              READ MORE
            </Link>
          </div>
          <div className="col-md-5 order-md-1">
            <img
              className="-image img-fluid rounded"
              alt="The Post"
              src={PF + post.photo}
            />
          </div>
        </div>
      </>
    );
  }
};

export default Post;
