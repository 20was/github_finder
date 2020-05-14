import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
const UserItem = ({ user: { login, id, avatar_url, html_url } }) => {
  // we removed destructuring code written below function
  //  const { login, avatar_url, html_url } = props.user;

  return (
    <div className="card mb-3" style={{ width: "14rem" }}>
      <img src={avatar_url} className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">{login}</h5>
        {/* <p className="card-text">
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </p> */}
        <Link
          to={`/user/${login}`}
          className="btn  btn-outline-danger btn-block"
        >
          More
        </Link>
      </div>
    </div>
  );
};
UserItem.prototypes = {
  //ptor shortcut
  user: PropTypes.object.isRequired,
};
export default UserItem;
