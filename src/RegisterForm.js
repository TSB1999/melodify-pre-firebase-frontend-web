import React from 'react'
import SubmitButton from './SubmitButton'
import InputField from './InputField'
import UserStore from './stores/UserStores';
import './App.css';

class RegisterForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      username: '',
      password: '',
      buttonDisabled: false
    }
  }

 render() {
   return (
     <div className="registerForm">
     Register
     <InputField
         type = 'text'
         placeholder = 'Username'
         value = {this.state.username ? this.state.username : ''}
         onChange = { (val) => this.setInputValue('username', val)}
     />

     <InputField
         type = 'password'
         placeholder = 'Password'
         value = {this.state.password ? this.state.password : ''}
         onChange = { (val) => this.setInputValue('password', val)}
     />

     <SubmitButton
         text = 'Register'
         disabled = {this.state.buttonDisabled}
         onClick = { () => this.doLogin()} //doRegister
     />
     </div>
   );
 }
}

export default RegisterForm;
