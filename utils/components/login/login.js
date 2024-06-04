"use client";
import { useState } from "react";
import Link from "next/link";
import "./login.css";
import { createNewUser } from "@/utils/api/usersApi/userApi";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");


 
  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData);
    // Handle post submission logic here
    const post = await createNewUser(data);
    console.log(post);
    alert( "submitted");
  };

  return (
    <div>
      <h2>Login</h2>
      <form className="login-form" onSubmit={handleSubmit}>
        <div>
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit">Submit</button>
      </form>
      <div className="login-links">
{/* 
        <Link href="/forgot-password">
          Forgot password?
        </Link>
        <Link href="/register">
          Register
        </Link> */}
        <Link href="/forgot-password">Forgot password?</Link>
        <Link href="/register">Register</Link>
      </div>
    </div>
  );
};

export default Login;
