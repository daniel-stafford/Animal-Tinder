import React from 'react';
import users from '../utils/users';
import serializeForm from 'form-serialize';

//TODO: sign up function

class Login extends React.Component {
  handleSubmit = (e) => {
    e.preventDefault();
    const { history } = this.props;
    const values = serializeForm(e.target, { hash: true });
    const user = users.filter(user => user.username === values.username)[0];
    if (values.username && values.password) {
      if (this.props.login && values.password === user.password ) {
        this.props.login(user.userId)
      }
    }
    history.push('/play');
  }

  render() {
      return (
          <div className="login-page">
            <h2>Login</h2>
            <form onSubmit={this.handleSubmit} className="login-form">
              <label>
                Username
                <input type="text" name="username" placeholder="Username"/>
              </label>
              <label>
                Password
                <input type="text" name="password" placeholder="Password"/>
              </label>  
              <button className="login-button">Log in</button>
            </form>
          </div>
      )
  }
}

export default Login;