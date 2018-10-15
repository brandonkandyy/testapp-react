import React from 'react';
import {Form, Button} from "semantic-ui-react";

class LoginForm extends React.Component {
  state = {
    data: {
      email: '',
      password: ''
    },
    loading: false,
    errors: {}
  }

  onChange = e =>
   this.setState({ data: {...this.state.data, [e.target.name]: e.target.value}
   });

  render(){
    const { data } = this.state

    return(
      <Form>
        <Form.Field>
          <label htmlFor="email">Email</label>
          <input
            type = "email"
            id = "email"
            name = "email"
            placeholder = "john.smith@example.com"
            value = {data.email}
            onChange = {this.onChange}
          />
        </Form.Field>
        <Form.Field>
          <label htmlFor="password">Password</label>
          <input
            type = "password"
            id = "password"
            name = "password"
            placeholder = "Not Your Cat Name"
            value = {data.password}
            onChange = {this.onChange}
          />
        </Form.Field>
        <Button primary>Login</Button>
      </Form>
    );
  }
}

export default LoginForm;