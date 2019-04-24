import React, { Component } from 'react';
import { Form, Input, Upload } from 'antd';
// import IconFont from '../common/iconfont';

const FormItem = Form.Item;

class EditAccountForm extends Component {
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
    let { userInfo } = this.props;
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
        <Form {...formItemLayout}>
          <FormItem label="Profile Photo" colon={false}>
            {getFieldDecorator('photo', {
              initialValue: '',
            })(
              <Upload name="logo" action="/upload.do" listType="picture">
                <div className="pointer-btn upload-photo" style={{ width:50, height: 50}}>
                  <img src="" alt="" />
                </div>
              </Upload>
            )}
          </FormItem>
          <FormItem label="User Name" colon={false}>
            {getFieldDecorator('username', {
              initialValue: userInfo.username,
            })(
              <Input className="vl-input" placeholder="" />
            )}
          </FormItem>
          <FormItem label="First Name" colon={false}>
            {getFieldDecorator('firstname', {
              initialValue: userInfo.firstname,
            })(
              <Input className="vl-input" placeholder="" />
            )}
          </FormItem>
          <FormItem label="Last Name" colon={false}>
            {getFieldDecorator('lastname', {
              initialValue: userInfo.lastname,
            })(
              <Input className="vl-input" placeholder="" />
            )}
          </FormItem>
          <FormItem label="Email" colon={false}>
            {getFieldDecorator('useremail', {
              initialValue: userInfo.useremail,
            })(
              <Input className="vl-input" placeholder="" />
            )}
          </FormItem>
        </Form>
      </div>
    );
  }
}

const WrappedEditAccountForm = Form.create({ name: 'edit-account' })(EditAccountForm);
export default WrappedEditAccountForm;
