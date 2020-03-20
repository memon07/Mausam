import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

// import config from 'config'
import { Form, Input, Button } from 'antd'
import '../css/LoginForm.css'

import { getUserData } from '../actions/user'

class LoginForm extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        let data = {
          "email": values.email,
          "password": values.password,
        }

        // let url = `http://localhost:8000/api/user`
        const { fetchData } = this.props;
        fetchData(data);
      }
    });
  };


  render(){

    const { getFieldDecorator  } = this.props.form;
    const FormItem = Form.Item;


    return (
      <>
        <div>
          <h3>SignIn</h3>
        </div>
        <Form onSubmit={this.handleSubmit} className="login-form">
              <FormItem>
                {getFieldDecorator('email', {
                  rules: [
                    {type: 'email', message: 'Enter a valid e-mail id!',}, 
                    {required: true, message: 'Please provide your e-mail id.',},
                    {max:50},
                  ],
                })(
                  <Input
                    placeholder='Email'
                    size='large'
                    className='mb-3'
                  />
                )}
              </FormItem>

              <FormItem>
                {getFieldDecorator('password', {
                  rules: [{
                    required: true, message: 'Please provide your password.',
                  },{max:50}],
                })(
                  <Input
                    placeholder='Password'
                    className='mb-3'
                    size='large'
                  />
                )}
              </FormItem>

              <Button size='large' className='signin-btn'  htmlType="submit">Sign in</Button>
        </Form>
        <div className="mt-4">
          <Link to='/'>
            <li className="login-login__li">create a new account ? Signup</li>
          </Link>
        </div>
      </>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
      fetchData: (url,data) => dispatch(getUserData(url,data))
  };
};

const WrappedLoginForm = Form.create()(LoginForm);
const ConnectedLogin = connect(null, mapDispatchToProps)(WrappedLoginForm)

export default ConnectedLogin