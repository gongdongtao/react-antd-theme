import React, { Component } from 'react';
import { Form, Input } from 'antd';
// import IconFont from '../common/iconfont';

const FormItem = Form.Item;

class ChangePasswordForm extends Component {
  state = {
    saveLoading: false
  }

  componentDidMount() {

  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFieldsAndScroll((err, values) => {
      if (!err) {
        console.log(values);
      }
    })
  }

  render() {
    const { getFieldDecorator } = this.props.form;
    const formItemLayout = {
      labelCol: {
        xs: { span: 24 },
        sm: { span: 8 },
      },
      wrapperCol: {
        xs: { span: 24 },
        sm: { span: 16 },
      },
    };
    return (
      <div className="device-form">
        <p>Update your password below.</p>
        <Form {...formItemLayout}>
          <FormItem label="Old Password" colon={false}>
            {getFieldDecorator('oldPassword', {
              initialValue: '',
            })(
              <Input type="password" className="vl-input" placeholder="" />
            )}
          </FormItem>
          <FormItem label="New Password" colon={false}>
            {getFieldDecorator('newPassword', {
              initialValue: '',
            })(
              <Input type="password" className="vl-input" placeholder="" />
            )}
          </FormItem>
          <FormItem label="Confirm Password" colon={false}>
            {getFieldDecorator('confirmPassword', {
              initialValue: '',
            })(
              <Input type="password" className="vl-input" placeholder="" />
            )}
          </FormItem>
        </Form>
      </div>
    );
  }
}

const WrappedChangePasswordForm = Form.create({ name: 'change-password' })(ChangePasswordForm);
export default WrappedChangePasswordForm;
