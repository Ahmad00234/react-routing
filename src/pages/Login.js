import React from "react";
export default function Login() {
  return (
    <div class="box">
      <span class="borderline"></span>
      <form action="validate" method="post">
        <h2>Sign in:</h2>
        <div class="inputBox">
          <input type="text" name="email"></input>

          <span>Email</span>
          <i></i>
        </div>
        <div class="inputBox">
          <input type="password" name="password"></input>
          {/* <!-- Added name attribute for password and changed type to password --> */}
          <span>Password</span>
          <i></i>
        </div>
        <div class="links">
          <a href="#">Forget Password</a>
          <a href="#">Signup</a>
        </div>
        <input type="submit" value="Login"></input>
      </form>
    </div>
  );
}
