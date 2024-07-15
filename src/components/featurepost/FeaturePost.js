// import featureImage from "../../images/girl-squat.jpg"
import "./featurePost.css";
import { Link } from "react-router-dom";

const FeaturePost = ({ post }) => {
  const PF = "http://localhost:5000/images/";

  return (
    <div className="featurePost">
      <h1 className="pb-3 mb-4 fs-1 fw-bold border-bottom border-secondary feature-heading-primary">
        Feature Post
      </h1>
      {post.photo && (
        <img src={PF + post.photo} className="img-fluid featureImg" alt="" />
      )}
      <div className="col-md-12 px-0 mb-5">
        {post.categories.map((category) => (
          <strong className="d-inline-block mb-2 text-danger">
            {category.name}
          </strong>
        ))}
        <p className="fs-5 fst-italic py-1">
          {new Date(post.createdAt).toDateString()} by En Equilibrium
        </p>
        <h2 className="pt-3 fw-bold feature-heading-secondary">{post.title}</h2>
        <p className="my-3 fs-3">
          {post.desc.length > 600
            ? post.desc.substring(0, 600) + " ..."
            : post.desc}
        </p>
        <Link to={`/posts/${post._id}`} className="fs-4">
          Continue reading..
        </Link>
      </div>
      <p>&nbsp;</p>
    </div>
  );
};

export default FeaturePost;
