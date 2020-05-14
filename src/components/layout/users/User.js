import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";
import Spinner from "../Spinner";
import PropTypes from "prop-types";
import Repos from "../repos/Repos";
class User extends Component {
  state = {};
  componentDidMount() {
    this.props.getUser(this.props.match.params.login);
    this.props.getUserRepos(this.props.match.params.login);
  }

  static propTypes = {
    loading: PropTypes.bool,
    user: PropTypes.object.isRequired, //ptor
    getUser: PropTypes.func.isRequired, //ptfr
    repos: PropTypes.array.isRequired, //ptar
    getUserRepos: PropTypes.func.isRequired,
  };
  render() {
    const {
      name,
      avatar_url,
      location,
      bio,
      company,
      blog,
      login,
      html_url,
      followers,
      following,
      public_repos,
      public_gists,
    } = this.props.user;

    const { loading, repos } = this.props;
    if (loading) return <Spinner />;
    return (
      <Fragment>
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb" style={{ backgroundColor: "white" }}>
            <li className="breadcrumb-item">
              <Link to="/">Home</Link>
            </li>
            <li className="breadcrumb-item active" aria-current="page">
              {login}
            </li>
          </ol>
        </nav>

        <div className="jumbotron">
          <h1 className="display-4">
            {" "}
            <img
              src={avatar_url}
              alt=""
              className="round-img"
              style={{ width: "150px", borderRadius: "50%" }}
            />{" "}
            {name}
          </h1>

          {bio && (
            <Fragment>
              <nav aria-label="breadcrumb">
                <ol className="breadcrumb">
                  {login && (
                    <li className="breadcrumb-item">
                      <Fragment>
                        <strong>
                          <i class="fas fa-at" /> {login}
                        </strong>
                      </Fragment>
                    </li>
                  )}
                  {location && (
                    <li className="breadcrumb-item">
                      <Fragment>
                        <strong>
                          <i class="fas fa-map-marker-alt" /> {location}
                        </strong>
                      </Fragment>
                    </li>
                  )}
                  {company && (
                    <li className="breadcrumb-item">
                      <Fragment>
                        <strong>
                          <i class="fas fa-building" /> {company}
                        </strong>
                      </Fragment>
                    </li>
                  )}

                  {blog && (
                    <li className="breadcrumb-item">
                      <Fragment>
                        <strong>
                          <i class="fas fa-globe" /> {blog}
                        </strong>
                      </Fragment>
                    </li>
                  )}
                </ol>
              </nav>
              <p className="lead">{bio}</p>
            </Fragment>
          )}

          <hr className="my-4" />
          <ul className="list-group list-group-horizontal-xl">
            <li className="list-group-item">
              Followers{" "}
              <span class="badge badge-primary badge-pill">{followers}</span>
            </li>
            <li className="list-group-item">
              Following{" "}
              <span class="badge badge-primary badge-pill">{following}</span>
            </li>
            <li className="list-group-item">
              Public Repos{" "}
              <span class="badge badge-primary badge-pill">{public_repos}</span>
            </li>
            <li className="list-group-item">
              Public Gists{" "}
              <span class="badge badge-primary badge-pill">{public_gists}</span>
            </li>
            <li className="list-group-item">
              <a href={html_url}>Visit Github Profile</a>
            </li>
          </ul>
          <h4 style={{ margin: "20px" }}>Latest 5 Repos</h4>
          <ul className="list-group list-group-flush">
            <Repos repos={repos} />
          </ul>
        </div>
      </Fragment>
    );
  }
}

export default User;
