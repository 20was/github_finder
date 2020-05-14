import React from "react";
import PropTypes from "prop-types"; //impt
import UserItem from "./UserItem";
import Spinner from "../Spinner";

const Users = ({ users, loading }) => {
  if (loading) {
    return <Spinner />;
  } else {
    return (
      <div style={userStyle}>
        {users.map((user) => (
          <UserItem id={user.id} user={user} />
        ))}
      </div>
    );
  }
};
Users.prototype = {
  users: PropTypes.array.isRequired,
  loading: PropTypes.bool.isRequired,
};
const userStyle = {
  display: "grid",
  gridTemplateColumns: "repeat(4, 1fr)",
  gridGap: "1rem",
};

export default Users;
