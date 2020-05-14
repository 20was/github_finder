import React, { Component, Fragment } from "react";
import axios from "axios";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
//import "./App.css";
import Navbar from "./components/layout/Navbar";
import Users from "./components/layout/users/Users";
import Search from "./components/layout/users/Search";
import { Alert } from "./components/layout/Alert";
import About from "./components/pages/About";
import User from "./components/layout/users/User";
class App extends Component {
  state = {
    users: [],
    repos: [],
    user: {},
    loading: false,
    alert: null,
  };

  //clearing users
  clearUsers = () => {
    this.setState({
      users: [],
      loading: false,
    });
  };
  //get a single github users details
  getUser = async (username) => {
    this.setState({
      loading: true,
    });
    const res = await axios.get(
      `https://api.github.com/users/${username}?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
    );
    this.setState({
      user: res.data,
      loading: false,
    });
  };

  //get a users repo
  getUserRepos = async (username) => {
    this.setState({
      loading: true,
    });
    const res = await axios.get(
      `https://api.github.com/users/${username}/repos?per_page=5&sort=created:asc&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
    );
    this.setState({
      repos: res.data,
      loading: false,
    });
  };

  //setting an alert if no value is passed
  setAlert = (msg, type) => {
    this.setState({
      alert: {
        msg: msg,
        type: type,
      },
    });
    setTimeout(() => this.setState({ alert: null }), 3000);
  };
  // search github users
  searchUsers = async (text) => {
    this.setState({
      loading: true,
    });

    const res = await axios.get(
      `https://api.github.com/search/users?q=${text}&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
    );
    //console.log(res.data);
    this.setState({
      users: res.data.items,
      loading: false,
    });
  };
  // uncomment below code to display user after the page is loaded and before any search happens

  // async componentDidMount() {
  //   //console.log(process.env.REACT_APP_GITHUB_CLIENT_ID);
  //   this.setState({
  //     loading: true,
  //   });
  //   const res = await axios.get(
  //     `https://api.github.com/users?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
  //   );
  //   //console.log(res.data);
  //   this.setState({
  //     users: res.data,
  //     loading: false,
  //   });
  // }
  render() {
    const { users, loading, user, repos } = this.state;
    return (
      <Router>
        <div className="App">
          <Navbar />
          <div className="container">
            <Alert alert={this.state.alert} />
            <Switch>
              <Route
                exact
                path="/"
                render={(props) => (
                  <Fragment>
                    <Search
                      searchUsers={this.searchUsers}
                      clearUsers={this.clearUsers}
                      setAlert={this.setAlert}
                      hideSearchButton={users.length > 0 ? true : false}
                    />

                    <Users loading={loading} users={this.state.users} />
                  </Fragment>
                )}
              />
              <Route exact path="/about" component={About} />
              <Route
                exact
                path="/user/:login"
                render={(props) => (
                  <User
                    {...props}
                    getUser={this.getUser}
                    getUserRepos={this.getUserRepos}
                    repos={repos}
                    user={user}
                    loading={loading}
                  />
                )}
              />
            </Switch>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
