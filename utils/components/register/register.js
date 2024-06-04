"use client";
import { useState } from "react";
import Link from "next/link";

export default function Register() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    password: "",
    confirmPassword: "",
    birthDate: "",
    gender: ""
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Add form submission logic here
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData);
    // Handle post submission logic here
    const register = await createNewregister(data);
    console.log(register);
    alert("submited");
    setPostContent("");
  };

  return (
    <div>
      <h1>Register</h1>
      <form onSubmit={handleSubmit}>
        <label>
          First Name:
          <input type="text" name="firstName" value={formData.firstName} onChange={handleChange} required />
        </label>
        <br />
        <label>
          Last Name:
          <input type="text" name="lastName" value={formData.lastName} onChange={handleChange} required />
        </label>
        <br />
        <label>
          Phone Number:
          <input type="tel" name="phone" value={formData.phone} onChange={handleChange} required />
        </label>
        <br />
        <label>
          Email:
          <input type="email" name="email" value={formData.email} onChange={handleChange} required />
        </label>
        <br />
        <label>
          Password:
          <input type="password" name="password" value={formData.password} onChange={handleChange} required />
        </label>
        <br />
        <label>
          Confirm Password:
          <input type="password" name="confirmPassword" value={formData.confirmPassword} onChange={handleChange} required />
        </label>
        <br />
        <label>
          Birth Date:
          <input type="date" name="birthDate" value={formData.birthDate} onChange={handleChange} required />
        </label>
        <br />
        <label>
          Gender:
          <select name="gender" value={formData.gender} onChange={handleChange} required>
            <option value="">Select Gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
        </label>
        <br />
        <button type="submit">Register</button>
      </form>
      <Link href="/login">Go to Login Page</Link>
    </div>
  );
}
