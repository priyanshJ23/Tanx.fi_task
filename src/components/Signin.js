import React from 'react'
import { Col, Button, Row, Container, Card, Form, Nav } from "react-bootstrap";
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from './AutoContext';
import axios from 'axios'

export default function Login() {
    const { login } = useAuth();
  const [formData, SetFormData] = useState({
    email:'',
    password:'',
  })
  const [errors, setErrors] = useState({})
  const [isvalid, setisvalid] = useState(true);
    const navigate = useNavigate();
    const handlesubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    let isvalid = true; // Change from const to let
    let validationErrors = {};
  
    if (formData.email === "" || formData.email === null) {
      isvalid = false;
      validationErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      isvalid = false;
      validationErrors.email = "Email is not valid";
    }
  
    if (formData.password === "" || formData.password === null) {
      isvalid = false;
      validationErrors.password = "Password is required";
    } else if (formData.password.length < 6) {
      isvalid = false;
      validationErrors.password = "Password should have at least 6 characters";
    }
  
    setErrors(validationErrors);
    setisvalid(isvalid);
  
    axios.get("http://localhost:5000/users")
      .then(result => {
        result.data.map(user => {
          if (user.email === formData.email) {
            if (user.password === formData.password) {
                login();
                navigate('/');
            } else {
              isvalid = false;
              alert("Enter Correct Password");
            }
          } else if (formData.email === "") {
            isvalid = false;
            validationErrors.email = "Wrong Email";
          }
        });
  
        setErrors(validationErrors);
        setisvalid(isvalid);
      })
      .catch(err => console.log(err));
  }
    return (
        <div className="relative flex flex-col justify-center min-h-screen overflow-hidden">
            <div className="w-full p-6 m-auto bg-white rounded-md shadow-md lg:max-w-xl">
                <h1 className="text-3xl font-semibold text-center text-green-700 underline">
                   Sign in
                </h1>
                <form className="mt-6">
                    <div className="mb-2">
                        <label
                            for="email"
                            className="block text-sm font-semibold text-gray-800"
                        >
                            Email
                        </label>
                        <input
                            type="email"
                            onChange={(event) => SetFormData({...formData, email: event.target.value})}
                            className="block w-full px-4 py-2 mt-2 text-green-700 bg-white border rounded-md focus:border-green-400 focus:ring-green-300 focus:outline-none focus:ring focus:ring-opacity-40"
                        />
                    </div>
                    <div className="mb-2">
                        <label
                            for="password"
                            className="block text-sm font-semibold text-gray-800"
                        >
                            Password
                        </label>
                        <input
                            type="password"
                            onChange={(event) => SetFormData({...formData, password: event.target.value})}
                            className="block w-full px-4 py-2 mt-2 text-green-700 bg-white border rounded-md focus:border-green-400 focus:ring-green-300 focus:outline-none focus:ring focus:ring-opacity-40"
                        />
                    </div>
                    <a
                        href="#"
                        className="text-xs text-green-600 hover:underline"
                    >
                        Forget Password?
                    </a>
                    <div className="mt-6">
                        <button  onClick={handlesubmit} className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-green-700 rounded-md hover:bg-green-600 focus:outline-none focus:bg-green-600">
                            Login
                        </button>
                    </div>
                </form>
                  
                <p className="mt-8 text-xs font-light text-center text-gray-700">
                    {" "}
                    Don't have an account?{" "}
                    <Link to="/signup">Sign up</Link>
                </p>
            </div>
        </div>
    );
}