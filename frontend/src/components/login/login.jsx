// import React from 'react'
import './login.css'
import logo from '../../assets/rankstocksthumbnail.png';

// function home() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Login Page
//         </p>
//         <p>
//           Author: <a target="_blank" className="personal-link" href='https://www.linkedin.com/in/amirrezaaazam/'>Amirreza Aazam</a>
//         </p>
//         <a
//           className="App-link"
//           href="https://amirrezaazam.netlify.app/"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           checkout my personal portfolio in the meantime
//         </a>
//       </header>
//     </div>
//   )
// }

// export default home


import React, { Component } from "react";

// async function auth () {
//   if (2 == 3)
//   return true;
//   else {
//     return false;
//   }
// }

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

   
  handleSubmit(e) {
    e.preventDefault();
    const { email, password } = this.state;
    console.log(email, password);
    
    fetch("http://localhost:5000/login", {
      method: "POST",
      crossDomain: true,
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify({
        email,
        password,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data, "userRegister");
        if (data.status == "ok") {
          // alert("login successful");
          window.localStorage.setItem("token", data.data);
          window.localStorage.setItem("loggedIn", true);
          window.location.href = "./";
        }
      });
  }
  render() {
    return (<>
      <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Login Page
        </p>
        <p>
          Author: <a target="_blank" className="personal-link" href='https://www.linkedin.com/in/amirrezaaazam/'>Amirreza Aazam</a>
        </p>
        <a
          className="App-link"
          href="https://amirrezaazam.netlify.app/"
          target="_blank"
          rel="noopener noreferrer"
        >
          checkout my personal portfolio in the meantime
        </a>
      </header>
    </div>
      <form onSubmit={this.handleSubmit}>
        <h3>Welcome Back!</h3>

        <div className="mb-3">
          <label>Email address</label>
          <input
            type="email"
            className="form-control"
            placeholder="Enter email"
            onChange={(e) => this.setState({ email: e.target.value })}
          />
        </div>

        <div className="mb-3">
          <label>Password</label>
          <input
            type="password"
            className="form-control"
            placeholder="Enter password"
            onChange={(e) => this.setState({ password: e.target.value })}
          />
        </div>

        <div className="mb-3">
          <div className="custom-control custom-checkbox">
            <input
              type="checkbox"
              className="custom-control-input"
              id="customCheck1"
            />
            <label className="custom-control-label" htmlFor="customCheck1">
              Remember me
            </label>
          </div>
        </div>

        <div className="d-grid">
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </div>
        <p className="forgot-password text-right">
          <a href="/sign-up">Sign Up</a>
        </p>
      </form>
      </>);
  }
}