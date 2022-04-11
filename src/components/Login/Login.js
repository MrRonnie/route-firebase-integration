import React from "react";
import userFirebase from "../../hooks/useFirebase";

const Login = () => {
  const { singInWithGoogle } = userFirebase();
  return (
    <div>
      <h2>Please Login</h2>
      <div style={{ margin: "20px" }}>
        <button onClick={singInWithGoogle}>Google Sing In</button>
      </div>
      <form>
        <input type="email" placeholder="Your Email" />
        <br />
        <input type="password" placeholder="Your Password" />
        <br />
        <input type="submit" value="Login" />
      </form>
    </div>
  );
};

export default Login;
