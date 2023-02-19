import React, { useState } from 'react'
import { Close, Facebook, Google, LinkedIn} from '@mui/icons-material';
import "./LoginSignUp.css"


export default function LoginSignUp() {

    let [toggle , setToggle] = useState(false);

    const change = ()=>{
        setToggle(!toggle)
    }


    const signUp = ()=>{

    }

    const login = ()=>{
        
    }

  return (
    <div className="body">
      
<div className={(toggle) ? "container right-panel-active" : "container" } id="container">
	<div className="form-container sign-up-container">
		<form onSubmit={signUp}>
			<h1>Create Account</h1>
			<div className="social-container">
				<a href="#" className="social"><Facebook/></a>
				<a href="#" className="social"><Google/></a>
				<a href="#" className="social"><LinkedIn/></a>
			</div>
			<span>or use your email for registration</span>
			<input type="text" placeholder="First Name" />
			<input type="text" placeholder="Last Name" />
			<input type="email" placeholder="Email" />
			<input type="password" placeholder="Password" />
			<button type='submit'>Sign Up</button>
		</form>
	</div>
	<div className="form-container sign-in-container">
		<form onSubmit={login}>
			<h1>Sign in</h1>
			<div className="social-container">
				<a href="#" className="social"><Facebook/></a>
				<a href="#" className="social"><Google/></a>
				<a href="#" className="social"><LinkedIn/></a>
			</div>
			<span>or use your account</span>
			<input type="email" placeholder="Email" />
			<input type="password" placeholder="Password" />
			<a href="#">Forgot your password?</a>
			<button type='submit'>Sign In</button>
		</form>
	</div>
	<div className="overlay-container">
		<div className="overlay">
			<div className="overlay-panel overlay-left">
				<h1>Welcome Back!</h1>
				<p>To keep connected with us please login with your personal info</p>
				<button className="ghost" id="signIn" onClick={change}>Sign In</button>
			</div>
			<div className="overlay-panel overlay-right">
				<h1>Hello, Friend!</h1>
				<p>Enter your personal details and start journey with us</p>
				<button className="ghost" id="signUp" onClick={change}>Sign Up</button>
			</div>
		</div>
	</div>
</div>

    </div>
  )
}
