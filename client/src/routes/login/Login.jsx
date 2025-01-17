import { useContext, useState } from "react";
import "./login.scss";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios"
import { AuthContext } from "../../context/AuthContext";
import apiRequest from "../../lib/apiRequest";

function Login() {

  const{updateUser} = useContext(AuthContext);
  const [error,setError] = useState("")
  const [isloading,setIsloading] = useState(false)
  const navigate = useNavigate()

  const handleSubmit = async(e) =>{
    e.preventDefault();
    setError("")
    setIsloading(true)
    const formdata = new FormData(e.target);

    const username = formdata.get("username")
    const password = formdata.get("password")
    
    try{
      const res = await apiRequest.post("/auth/login",{username,password})
      
      updateUser(res.data);
      navigate("/");
    }
    catch(err){
      setError(err.response.data.message)
    }
    finally{
      setIsloading(false)
    }
  }

  return (
    <div className="login">
      <div className="formContainer">
        <form onSubmit={handleSubmit}>
          <h1>Welcome back</h1>
          <input name="username" required minLength={3} type="text" placeholder="Username" />
          <input name="password" type="password" required placeholder="Password" />
          <button disabled={isloading}>Login</button>
          {error && <span>{error}</span>}
          <Link to="/register">{"Don't"} you have an account?</Link>
        </form>
      </div>
      <div className="imgContainer">
        <img src="/bg.png" alt="" />
      </div>
    </div>
  );
}

export default Login;