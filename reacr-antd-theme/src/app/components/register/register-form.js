import React, { Component } from 'react';
import { Form, Input, Button } from 'antd';
// import Store from '../../script/store';
// import Base64 from '../../script/base64';

const FormItem = Form.Item;

class RegisterForm extends Component {
  state = {
    loginLoading: false,
  }
  
  componentDidMount() {
    
  }
  
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFieldsAndScroll((err, values) => {
      if (!err) {
        console.log(values);
        this.props.history.push('login');
      }
    })
  }
  
  comparePassword = (rule, value, callback) => {
    const form = this.props.form;
    if (value && value !== form.getFieldValue('password')) {
      callback('Passwords do not match');
    } else {
      callback();
    }
  }
  
  render() {
    const { getFieldDecorator } = this.props.form;
    // const { loginErrorMsg } = this.props;
    return (
      <Form onSubmit={this.handleSubmit}>
        <FormItem>
          <label className="label">User Name</label>
          {getFieldDecorator('username', {
            initialValue: '',
            rules: [
              { required: true, message: 'Please input your username.' }
            ]
          })(
            <Input placeholder="Enter User Name" />
          )}
        </FormItem>
        <FormItem>
          <label className="label">Password</label>
          {getFieldDecorator('password', {
            initialValue: '',
            rules: [
              { required: true, message: 'Please input password.' }
            ]
          })(
            <Input type="password" placeholder="Enter Password" />
          )}
        </FormItem>
        <FormItem>
          <label className="label">Confirm Password</label>
          {getFieldDecorator('confirmPassword', {
            initialValue: '',
            rules: [
              { required: true, message: 'Please input password again.' },
              { validator: this.comparePassword }
            ]
          })(
            <Input type="password" placeholder="Confirm Password" />
          )}
        </FormItem>
        <FormItem>
          <label className="label">Email</label>
          {getFieldDecorator('email', {
            initialValue: '',
            rules: [
              { required: true, message: 'Please input your email address.' },
              { type: 'email', message: 'Please input the corrent email address.' },
            ]
          })(
            <Input  placeholder="Enter Email" />
          )}
        </FormItem>
        <FormItem>
          <label className="label">First Name</label>
          {getFieldDecorator('firstname', {
            initialValue: '',
            rules: [
              { required: true, message: 'Please input your first name.' }
            ]
          })(
            <Input  placeholder="Enter First Name" />
          )}
        </FormItem>
        <FormItem>
          <label className="label">Last Name</label>
          {getFieldDecorator('lastname', {
            initialValue: '',
            rules: [
              { required: true, message: 'Please input your last name.' }
            ]
          })(
            <Input  placeholder="Enter Last Name" />
          )}
        </FormItem>
        <FormItem style={{ marginTop: 30 }}>
          <Button type="primary" htmlType="submit" className="login-form-button" loading={this.state.loginLoading}>REGISTER</Button>
          <a className="register-link" href="#/login">Registered? Sign In</a>
        </FormItem>
      </Form>
    );
  }
}

const WrappedRegisterForm = Form.create({ name: 'register' })(RegisterForm);

export default WrappedRegisterForm;
