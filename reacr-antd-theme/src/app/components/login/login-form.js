import React, { Component } from 'react';
import { Form, Icon, Input, Button, Checkbox, Alert } from 'antd';
import Store from '../../script/store';
import Base64 from '../../script/base64';

const FormItem = Form.Item;

class LoginForm extends Component {
  state = {
    loginLoading: false,
  }
  
  componentDidMount() {
    this.rememberFormValue();
  }
  
  rememberFormValue = () => {
    const isRemember = Store.get('remember') === 'true' ? true : false;
    if (isRemember) {
      this.props.form.setFieldsValue({
        remember: isRemember,
        username: Store.get('localUserName'),
        password: Store.get('localUserPwd') ? Base64.base64decode(Store.get('localUserPwd')) : ''
      });
    } else {
      this.props.form.setFieldsValue({
        password: ''
      });
    }
  }
  
  handleSubmit = (e) => {
    e.preventDefault();
    const values = this.props.form.getFieldsValue();
    if (!values.username) {
      this.props.loginActions.setLoginErrorMsg('Please enter your username.');
      return;
    }
    if (!values.password) {
      this.props.loginActions.setLoginErrorMsg('Please enter your password.');
      return;
    }
    this.props.loginActions.setLoginErrorMsg('');
    let user = {
      username : values.username, //转成小写字符;
      password : values.password, //Base64.base64encode(encodeURI(values.password)),
    };
    this.props.history.push('/');
    // this.setState({loginLoading: true});
    // this.props.loginActions.login(user, (data) => {
    //   this.setState({loginLoading: false});
    //   if (data) {
    //     this.props.history.push('/');
    //   }
    // });
    Store.set('localUserName', user.username);
    Store.set('localUserPwd', Base64.base64encode(encodeURI(values.password)));
    Store.set('remember', values.remember);
  }
  
  render() {
    const { getFieldDecorator } = this.props.form;
    const { loginErrorMsg } = this.props;
    return (
      <Form onSubmit={this.handleSubmit}>
        { loginErrorMsg ? <div className="login-error">
            <Alert message={loginErrorMsg} type="warning" showIcon />
          </div> : null }
        <FormItem>
          <label className="label">User Name</label>
          {getFieldDecorator('username', {
            initialValue: '',
          })(
            <Input prefix={<Icon type="user" />} placeholder="Enter User Name" />
          )}
        </FormItem>
        <FormItem>
          <label className="label">Password</label>
          {getFieldDecorator('password', {
            initialValue: ''
          })(
            <Input type="password" prefix={<Icon type="lock" />} placeholder="Enter Password" />
          )}
        </FormItem>
        <FormItem style={{ textAlign: 'center' }}>
          {getFieldDecorator('remember', {
            valuePropName: 'checked',
            initialValue: false,
          })(
            <Checkbox>Remember me</Checkbox>
          )}
        </FormItem>
        <FormItem>
          <Button type="primary" htmlType="submit" className="login-form-button" loading={this.state.loginLoading}>SIGN IN</Button>
          <a className="register-link" href="#/register">Register User</a>
        </FormItem>
        </Form>
    );
  }
}

const WrappedLoginForm = Form.create({ name: 'login' })(LoginForm);

export default WrappedLoginForm;
