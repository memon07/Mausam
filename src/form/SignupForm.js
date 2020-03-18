import React , {Component} from 'react'
import { connect } from 'react-redux'
import { Form,Input, Button } from 'antd'
import weatherLogo from '../images/cloudy.svg'

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
          "first_name":values.name,
          "password":values.password,
        }
        console.log(data)
        let url = `${config.api}/v2/users/register`;
        const { postData } = this.props;
        postData(url,data);
        this.props.form.resetFields()
      }
    });
  };



  componentWillUnmount() {
    this._isMounted = false;
  }

  render(){

    const { getFieldDecorator  } = this.props.form;
    const FormItem = Form.Item;

    return (
      <>
        <div>
            <img src={weatherLogo} height="70" className="pb-2" alt="logo"/>
            <h3>Signup</h3>
        </div>
        <Form onSubmit={this.handleSubmit} className="signup-form">
          
              <FormItem>
                {getFieldDecorator('name', {
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

              <Button size='large' className='signup-btn mb-4'  htmlType="submit">Create Account</Button>
        </Form>
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
