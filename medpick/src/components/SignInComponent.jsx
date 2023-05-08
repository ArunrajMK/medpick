import React from 'react';
import "./signin.css";

function SignInComponent() {
  return (
    <>
   
    <div id="signin_container">
    <h3 id="signText">Sign in</h3>
      <div id="box">
      <div id="form_div">
        <h3 id="signText2">Sign in to your account</h3>
        </div>
        <form >
        <div id="form_div">
        <label id="label">Email</label><br/>
        <input placeholder='xxxxxxxx'/>
        </div>
        <div id="form_div">
        <label id="label">Password</label><br/>
        <input placeholder='xxxxxxxx'/>
        </div>
        <div id="form_div">
        <label id="label">Forgot password</label><br/>
        </div>
        <div id="form_div">
        <button>
            Sign in
        </button>
        </div>
        </form>
        <div id="form_div">
       <h3 id="signUpNow">New to vajra? <span>Sign UP Now</span></h3>
       </div>
      </div>
    </div>
    </>
  )
}

export default SignInComponent