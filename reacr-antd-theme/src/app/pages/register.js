import React, { Component } from 'react';
import Logo from '../../images/vlan-logo.png';
import RegisterForm from '../components/register/register-form';

class Register extends Component {
  render() {
    return (
      <div className="login-page register-page">
        <div className="login-container">

          <div className="login-form">
            <div className="login-logo">
              <img src={Logo} alt="" />
            </div>
            <div className="login-desc" style={{ fontSize: 20 }}>Register User</div>
            <div className="login-content">
              <RegisterForm {...this.props} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Register
