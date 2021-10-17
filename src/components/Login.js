import React from 'react'
import firebase from './Firebase';
import { getAuth, RecaptchaVerifier } from "firebase/auth";
import { signInWithPhoneNumber } from "firebase/auth";
const auth = getAuth();


class Login extends React.Component {
  handleChange = (e) =>{
    const {name, value } = e.target
    this.setState({
        [name]: value
      })
  }
  configureCaptcha = () =>{
    window.recaptchaVerifier = new RecaptchaVerifier('sign-in-button', {
      'size': 'invisible',
      'callback': (response) => {
        // reCAPTCHA solved, allow signInWithPhoneNumber.
        this.onSignInSubmit();
        console.log("Recaptca varified")
      },
      defaultCountry: "BNG"
    },auth);
  }
  
  onSignInSubmit = (e) => {
    e.preventDefault()
    this.configureCaptcha()
    const phoneNumber = "+88" + this.state.mobile
    console.log(phoneNumber)
    const appVerifier = window.recaptchaVerifier;
    signInWithPhoneNumber(auth, phoneNumber, appVerifier)
        .then((confirmationResult) => {
          // SMS sent. Prompt user to type the code from the message, then sign the
          // user in with confirmationResult.confirm(code).
          window.confirmationResult = confirmationResult;
          console.log("OTP has been sent")
          // ...
        }).catch((error) => {
          // Error; SMS not sent
          // ...
          console.log("SMS not sent")
        });
  }
  
  onSubmitOTP = (e) =>{
    e.preventDefault()
    const code = this.state.otp
    console.log(code)
    window.confirmationResult.confirm(code).then((result) => {
      // User signed in successfully.
      const user = result.user;
      console.log(JSON.stringify(user))
      alert("User is verified")
      // ...
    }).catch((error) => {
      // User couldn't sign in (bad verification code?)
      // ...
    });
  }

  render() {
    return (
      <div className="login-card">
       
        <h2>Login Form</h2>
        <form onSubmit={this.onSignInSubmit}>
          <div id="sign-in-button"></div>
          <div className="input-login">
            <input type="tel" name="mobile" autoComplete="off" className="form-control" placeholder="  Enter Mobile Number..." onChange={this.handleChange} aria-label="Recipient's username" aria-describedby="button-addon2" required />
          </div>  
          <div className="button-login">
            <button className="btn btn-success"  type="sumbit" id="button-addon2">Submit</button>
          </div>
        </form>

        <h2>Enter OTP</h2>
        <form onSubmit={this.onSubmitOTP}>
          <div className="input-login">
            <input type="tel" name="otp" autoComplete="off" className="form-control" placeholder="  Enter OTP Number..." onChange={this.handleChange} aria-label="Recipient's username" aria-describedby="button-addon2" required />
          </div>
          <div className="button-login">
            <button className="btn btn-success" type="sumbit" id="button-addon2">Submit</button>
          </div>
        </form>


    
       {/* <input type="number" name="otp" placeholder="OTP Number" required onChange={this.handleChange}/>
          <button type="submit">Submit</button> */}


      </div>
      
    )
  }
}
export default Login;