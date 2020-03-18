import React , {Component} from 'react'
import { connect } from 'react-redux'
import { Form,Input, Button } from 'antd'
import weatherLogo from '../images/cloudy.svg'
import { Link } from 'react-router-dom'
import '../css/SignupForm.css'

import config from '../config'


import { postRegister } from '../actions/user'


class SignupForm extends Component {
  _isMounted = false;
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    this._isMounted = true;
  }

  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        let data = {
          "username":values.username,
          "password":values.password,
          "email":values.email
        }
        console.log(data)
        // let url = `${config.api}/user`;
        let url = `http://localhost:8000/api/user`
        const { postData } = this.props;
        console.log('url',url)
        postData(url,data);
        this.props.form.resetFields()
      }
    });
  };



  componentWillUnmount() {
    this._isMounted = false;
  }

  render(){

    const { getFieldDecorator } = this.props.form;
    const FormItem = Form.Item;

    return (
      <>
        <div>
            <img src={weatherLogo} height="70" className="pb-2" alt="logo"/>
            <h3>Signup</h3>
        </div>
        <Form onSubmit={this.handleSubmit} className="signup-form">
          
              <FormItem label="User name">
                {getFieldDecorator('username', {
                  rules: [
                    {required: true, message: 'Please provide your name.'},
                    {max:25}
                  ],
                })(
                  <Input
                  placeholder='Enter your name'
                  size='large'
                  className='mb-3'
                  />
                  )}
              </FormItem>

              <FormItem label="Email id">
                {getFieldDecorator('email', {
                  rules: [
                    {type: 'email', message: 'Enter a valid e-mail id!',}, 
                    {required: true, message: 'Please provide your e-mail id.',},
                    {max:50},
                  ],
                })(
                  <Input
                    placeholder='Enter your email id'
                    size='large'
                    className='mb-3'
                  />
                )}
              </FormItem>


              <FormItem label="Password">
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

              <Button size='large' className='signup-btn mb-4'  htmlType="submit">Create Account</Button>
        </Form>
        <div className="mt-1">
          <Link to='/login'>
            <li className="signup-login__li">Already an account ? Login</li>
          </Link>
        </div>
      </>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return{
    postData : (url,data) => dispatch(postRegister(url,data))
  }
}

const WrappedSignupForm = Form.create()(SignupForm);
const ConnectedSignup = connect(null, mapDispatchToProps)(WrappedSignupForm)

export default ConnectedSignup
