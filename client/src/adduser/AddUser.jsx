import React from 'react'
import './AddUser.css';
import { Link ,useNavigate} from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios';
import {toast}  from 'react-hot-toast';
export const AddUser = () => {
    const users={
        name:'',
        email:'',   
        address:''
    };
    const [user, setUser] = useState(users);
    const navigate=useNavigate();

    const inputHandler = (e) => {
        const { name, value } = e.target;
        setUser({ ...user, [name]: value });
        console.log(name, value);
    };
    const sumbitForm=async(e)=>{
        e.preventDefault();
        await axios.post('http://localhost:8000/api/user',user)
        .then((response) => {
            toast.success(response.data.message,{ position: "top-right" });
            navigate('/');
    })
        .catch((error) => {
            console.log("Error creating user:", error);
        });
    }
    
  return (
    <div className="addUser">
        <Link to="/" type="button" className="btn btn-secondary"><i className="fa-solid fa-arrow-left"></i> Back</Link>
        <h3>Add New User</h3>
        <form className='addUserForm' onSubmit={sumbitForm}>
            <div className="inputGroup">
                <label htmlFor="name">Name</label>
                <input type="text" id="name"
                onChange={inputHandler}
                name='name' placeholder='Enter your name' autoComplete='off' />
            </div>
            <div className="inputGroup">
                <label htmlFor="email">E-Mail</label>
                <input type="email" id="email" 
                onChange={inputHandler}
                name='email' placeholder='Enter your Email' autoComplete='off' />
            </div>
            <div className="inputGroup">
                <label htmlFor="address">Address</label>
                <input type="text" id="address" 
                onChange={inputHandler}
                name='address' placeholder='Enter your Address' autoComplete='off' />
            </div>
            <div className="inputGroup">
               <button type="submit" className="btn btn-primary">Submit</button>
               </div>
        </form>
    </div>
  )
}
export default AddUser
