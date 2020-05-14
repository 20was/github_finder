//rce
import React, { Component } from "react";
import PropTypes from "prop-types";

class Search extends Component {
  state = {
    text: "",
  };
  static propTypes = {
    searchUsers: PropTypes.func.isRequired,
    clearUsers: PropTypes.func.isRequired,
    setAlert: PropTypes.func.isRequired,
    hideSearchButton: PropTypes.bool.isRequired, //pbr
  };
  onChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  onSubmit = (e) => {
    e.preventDefault();
    if (this.state.text === "") {
      //
      this.props.setAlert("Please enter something", "light");
    } else {
      this.props.searchUsers(this.state.text);
      this.setState({
        text: "",
      });
    }
  };

  render() {
    const { hideSearchButton, clearUsers } = this.props;
    return (
      <div className="container" style={{ margin: "20px" }}>
        <div className="row">
          <div className="col-sm"></div>
          <div className="col-sm">
            <div>
              <form onSubmit={this.onSubmit} className="form">
                <div className="input-group mb-3">
                  <input
                    className="form-control"
                    type="text"
                    name="text"
                    placeholder="Search users...."
                    value={this.state.text}
                    onChange={this.onChange}
                  />
                  <div className="input-group-append">
                    <input
                      type="submit"
                      value="Search"
                      className="btn btn-outline-secondary"
                    />
                  </div>
                </div>
              </form>
              {hideSearchButton && (
                <button
                  className="btn btn-light btn-block"
                  onClick={clearUsers}
                >
                  Clear
                </button>
              )}
            </div>
          </div>
          <div className="col-sm"></div>
        </div>
      </div>
    );
  }
}

export default Search;
