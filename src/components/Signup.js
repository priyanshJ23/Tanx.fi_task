import React, { useState } from 'react'
import { Col, Button, Row, Container, Card, Form, Nav, FormText , Alert  } from "react-bootstrap";
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
export default function Registration() {
    
    const [formData, SetFormData] = useState({
      fname:'',
      email:'',
      password:'',
      cpassword:'',
    })
    const [errors, setErrors] = useState({})
    const [isvalid, setisvalid] = useState(true);
    const navigate = useNavigate();
    
    const handlesubmit = (e) =>{
    e.preventDefault();
    console.log(formData);
    let isvalid = false;
    let validationErrors = {}
    if(formData.fname==="" || formData.fname===null)
    {
      isvalid = false;
      validationErrors.fname = "First name required"
    }
    if(formData.email==="" || formData.email===null)
    {
      isvalid = false;
      validationErrors.email = "Email is required"
    }
    else if(!/\S+@\S+\.\S+/.test(formData.email)){
       isvalid = false;
       validationErrors.email = "Email is not valid";
    }

    if(formData.password=== "" || formData.password===null)
    {
      isvalid = false;
      validationErrors.email = "Password is required"
    }
    else if(formData.password.length <6)
    {
        isvalid = false;
        validationErrors.password = "Password atleast have 6char"
    }

    if(formData.cpassword !== formData.password)
    {
      isvalid = false;
      validationErrors.email = "Password Not matched"
    }
    setErrors(validationErrors);
    setisvalid(isvalid);

    if(Object.keys(validationErrors).length===0)
    {
      axios.post('http://localhost:5000/users', formData)
      .then(result=> 
        {
             alert("Registered Successfully");
             navigate('/signin'); 
        })
      .catch(err => console.log(err))
    }
  };
  return !isvalid ? (
    <Alert variant="danger">
      {errors.fname && <p>{errors.fname}</p>}
      {errors.email && <p>{errors.email}</p>}
      {errors.password && <p>{errors.password}</p>}
      {errors.cpassword && <p>{errors.cpassword}</p>}
    </Alert>
  ) : (
    <>
      <div className="relative flex flex-col justify-center min-h-screen overflow-hidden">
        <div className="w-full p-6 m-auto bg-white rounded-md shadow-md lg:max-w-xl">
          <h1 className="text-3xl font-semibold text-center text-green-700 underline">
            Sign up
          </h1>
          <form className="mt-6">
          <div className="mb-2">
                        <label
                            for="email"
                            className="block text-sm font-semibold text-gray-800"
                        >
                            Name
                        </label>
                        <input
                            type="email"
                            onChange={(event) => SetFormData({...formData, fname: event.target.value})}
                            className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
                        />
                    </div>
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
                            className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
                        />
                    </div>
                    <div className="mb-2">
                        <label
                            for="email"
                            className="block text-sm font-semibold text-gray-800"
                        >
                            PassWord
                        </label>
                        <input
                            type="email"
                            onChange={(event) => SetFormData({...formData, password: event.target.value})}
                            className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
                        />
                    </div>
                    <div className="mb-2">
                        <label
                            for="email"
                            className="block text-sm font-semibold text-gray-800"
                        >
                            Confirm Password
                        </label>
                        <input
                            type="email"
                            onChange={(event) => SetFormData({...formData, cpassword: event.target.value})}
                            className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
                        />
                    </div>
            <div className="mt-6">
              <button
                onClick={handlesubmit}
                className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-green-700 rounded-md hover:bg-purple-600 focus:outline-none focus:bg-purple-600"
              >
                Sign Up
              </button>
            </div>
          </form>
  
          <p className="mt-8 text-xs font-light text-center text-gray-700">
            Already Have an Account <Link to="/signin">Login</Link>
          </p>
        </div>
      </div>
    </>
  );
}