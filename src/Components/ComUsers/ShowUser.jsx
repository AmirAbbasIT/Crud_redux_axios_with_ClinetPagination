import React,{useEffect,useState} from 'react';
import {NavLink, useParams} from 'react-router-dom';
import {connect, useSelector} from 'react-redux';
import {getUser} from '../../Actions/UserAction';
import { waitFor } from '@testing-library/react';
const ShowUser=(props)=>{
    console.log("Hellllooooooooo");
    const {id} =useParams();
    
    var user=useSelector((state)=>{
        return state.Users.User;
    })
    console.log(props);
    useEffect(()=>{
       props.getUser(id);
        
       
        
    },[]);
    var ChangeUser=(event)=>{
        
    }
    if(!user)
    {
        return <h1>loading..</h1>;
    }
    return(
    <>
    <div className="container mt-5">
        <div className="card">
            <div className="card-title text-center mt-3">
                <h3>User Details</h3>
                <NavLink className="btn btn-primary-outline float-right mr-3" to="/">Go Back</NavLink>
            </div>
            <div className="card-body">
            
            <div className="form-group">
                <input type="text" name="name" value={user.name} onChange={ChangeUser} placeholder="Enter Your Name" className="form-control"/>
            </div>
            <div className="form-group">
                <input type="text" name="username" value={user.username} onChange={ChangeUser} placeholder="Enter Your UserName" className="form-control"/>
            </div>
            <div className="form-group">
                <input type="text" name="email" value={user.email} onChange={ChangeUser} placeholder="Enter Your Email" className="form-control"/>
            </div>
            <div className="form-group">
                <input type="text" name="phonenumber" value={user.phonenumber} onChange={ChangeUser} placeholder="Enter Your Phone Number" className="form-control"/>
            </div>
            <div className="form-group">
                <input type="text" name="address" value={user.address} onChange={ChangeUser} placeholder="Enter Your Address" className="form-control"/>
            </div>
       
            </div>
        </div>
    </div>
    </>
    )
}
const StateToProps=(state)=>{
    return{
        User:state.Users.User,
    }
    }
export default connect(StateToProps,{getUser})(ShowUser);