import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Logo from '../../images/vlan-logo.png';
import LoginForm from '../components/login/login-form';
import * as loginActions from '../actions/login_action';

class Login extends Component {
  render() {
    return (
      <div className="login-page">
        <div className="login-container">
          <div className="shelfCenter">
            <div className="login-form">
              <div className="login-logo">
                <img src={Logo} alt="" />
              </div>
              <div className="login-desc">Software Defined WAN</div>
              <div className="login-content">
                <LoginForm {...this.props} />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  let { loginErrorMsg } = state.loginReducer;
  return {
    loginErrorMsg,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    loginActions: bindActionCreators(loginActions, dispatch),
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login)
