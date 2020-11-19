import React, { useEffect, useState } from 'react';
import {connect} from 'react-redux';
import { useHistory, useParams,  } from 'react-router-dom';
import {getUser,updateUser} from '../../Actions/UserAction';
import toast from 'react-toast-notification';
const UpdateUser=(props)=>{

    const history=useHistory();
    const {id} =useParams();

    var [user,setUser]=useState({
        name:"",
        username:"",
        email:"",
        phonenumber:"",
        address:""
    });

    useEffect(async ()=>{
        await props.getUser(id);
        setUser(props.User);
    },[props.User])

    var SubmitUser=(event)=>{
        event.preventDefault();
       props.updateUser(user);
       toast.success("User Updated Successfully!!!");
         history.push('/');
    }

    var ChangeUser=(event)=>{
        setUser(oldVal=>{
            return{
                ...oldVal,
                [event.target.name]:event.target.value,
            }
        })
    }
    return(
    <>
    <div className="container mt-5">
        <div className="card">
            <div className="card-title text-center mt-3">
                <h3>Edit User</h3>
            </div>
            <div className="card-body">
            <form onSubmit={SubmitUser}>
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
            <div className="form-group">
                <button type="submit" className="btn btn-outline-warning btn-block">Update User</button>
            </div>
        </form>
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
export default connect(StateToProps,{getUser,updateUser})(UpdateUser);