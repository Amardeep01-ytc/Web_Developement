import React, { Component } from 'react';

class App extends Component {
  constructor() {
    super();
    this.state = {
      isLogin: true, // Initially show the login form
      username: '',
      password: '',
      registrationUsername: '',
      registrationPassword: '',
    };
  }

  toggleForm = () => {
    this.setState((prevState) => ({
      isLogin: !prevState.isLogin,
    }));
  };

  handleLoginSubmit = (e) => {
    e.preventDefault();
    // Add your login logic here
    console.log('Login submitted with username: ' + this.state.username);
  };

  handleRegistrationSubmit = (e) => {
    e.preventDefault();
    // Add your registration logic here
    console.log('Registration submitted with username: ' + this.state.registrationUsername);
  };

  render() {
    return (
      <div>
        {this.state.isLogin ? (
          <div>
            <h2>Login</h2>
            <form onSubmit={this.handleLoginSubmit}>
              <input
                type="text"
                placeholder="Username"
                value={this.state.username}
                onChange={(e) => this.setState({ username: e.target.value })}
              />
              <input
                type="password"
                placeholder="Password"
                value={this.state.password}
                onChange={(e) => this.setState({ password: e.target.value })}
              />
              <button type="submit">Login</button>
            </form>
            <p>
              Don't have an account?{' '}
              <span onClick={this.toggleForm}>Register here</span>
            </p>
          </div>
        ) : (
          <div>
            <h2>Registration</h2>
            <form onSubmit={this.handleRegistrationSubmit}>
              <input
                type="text"
                placeholder="Username"
                value={this.state.registrationUsername}
                onChange={(e) =>
                  this.setState({ registrationUsername: e.target.value })
                }
              />
              <input
                type="password"
                placeholder="Password"
                value={this.state.registrationPassword}
                onChange={(e) =>
                  this.setState({ registrationPassword: e.target.value })
                }
              />
              <button type="submit">Register</button>
            </form>
            <p>
              Already have an account?{' '}
              <span onClick={this.toggleForm}>Login here</span>
            </p>
          </div>
        )}
      </div>
    );
  }
}

export default App;
