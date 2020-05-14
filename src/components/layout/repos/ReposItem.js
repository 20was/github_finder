import React from "react";
import PropTypes from "prop-types";
const ReposItem = ({ repo }) => {
  return (
    <li class="list-group-item">
      <a href={repo.html_url}>{repo.name}</a>
    </li>
  );
};
ReposItem.prototype = {
  repo: PropTypes.object.isRequired,
};
export default ReposItem;
