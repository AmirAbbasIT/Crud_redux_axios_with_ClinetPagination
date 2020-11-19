import React from "react";
import { connect } from "react-redux";
import { addUser } from "../../Actions/UserAction";
import { useState } from "react";
import { useHistory } from "react-router-dom";
import { useForm } from "react-hook-form";
import toast from 'react-toast-notification';
import classNames from "classnames";
const AddUser = (props) => {
  const { register, handleSubmit, errors } = useForm({
    mode: "onTouched",
  });

  var history = useHistory();

  var SubmitUser = (data) => {
    console.log(data);
    props.addUser(data);
    toast.success("User Added Successfully!!!");
    history.push("/");
  };

  return (
    <>
      <div className="container mt-5">
        <div className="card">
          <div className="card-title text-center mt-3">
            <h3>Add User</h3>
          </div>
          <div className="card-body">
            <form onSubmit={handleSubmit(SubmitUser)}>
              <div className="form-group">
                <input
                  type="text"
                  name="name"
                  placeholder="Enter Your Name"
                  className={classNames("form-control", {
                    "is-invalid": errors.name,
                  })}
                  ref={register({
                    required: "Name is required.",
                    minLength: {
                      value: 5,
                      message: "Minimum 5 characters are required",
                    },
                  })}
                />
                <small className="text-danger">
                  {errors.name && errors.name.message}
                </small>
              </div>
              <div className="form-group">
                <input
                  type="text"
                  name="username"
                  placeholder="Enter Your UserName"
                  className={classNames("form-control", {
                    "is-invalid": errors.username,
                  })}
                  ref={register({
                    required: "UserName is required.",
                    minLength: {
                      value: 5,
                      message: "Minimum 5 characters are required",
                    },
                  })}
                />
                <small className="text-danger">
                  {errors.username && errors.username.message}
                </small>
              </div>
              <div className="form-group">
                <input
                  type="text"
                  name="email"
                  placeholder="Enter Your Email"
                  className={classNames("form-control", {
                    "is-invalid": errors.email,
                  })}
                  ref={register({
                    required: "Email is required.",
                    pattern: {
                      value: /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i,
                      message: "Please Enter a valid email",
                    },
                  })}
                />
                <small className="text-danger">
                  {errors.email && errors.email.message}
                </small>
              </div>
              <div className="form-group">
                <input
                  type="text"
                  name="phonenumber"
                  placeholder="Enter Your Phone Number"
                  className={classNames("form-control", {
                    "is-invalid": errors.phonenumber,
                  })}
                  ref={register({
                    required: "Contact Number is required.",
                    minLength: {
                      value: 11,
                      message: "Contact number should contain 11 digits",
                    },
                    maxLength: {
                      value: 11,
                      message:
                        "Contact number should not contain more than 11 digits",
                    },
                  })}
                />
                <small className="text-danger">
                  {errors.phonenumber && errors.phonenumber.message}
                </small>
              </div>
              <div className="form-group">
                <input
                  type="text"
                  name="address"
                  placeholder="Enter Your Address"
                  className={classNames("form-control", {
                    "is-invalid": errors.address,
                  })}
                  ref={register({
                    required: "Address is required.",
                    minLength: {
                      value: 10,
                      message: "Minimum 10 characters are required",
                    },
                  })}
                />
                <small className="text-danger">
                  {errors.address && errors.address.message}
                </small>
              </div>
              <div className="form-group">
                <button
                  type="submit"
                  className="btn btn-outline-success btn-block"
                >
                  Add User
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default connect(null, { addUser })(AddUser);
