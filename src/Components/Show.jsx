import React from "react";
class Show extends React.Component {
  constructor() {
    super();
    this.state = {
      user:{
          email:"",
          password:""
      },
      Items:[1,2,3,4,5,6,7,8]
    };
  }

  render() {
    

    const SignInUser = (event) => {
        event.preventDefault();
        console.log("Yuppeeeee...");
        console.log(this.state.user);
    };
    const changeUserState=(event)=>{
        this.setState({
            ...this.state,
            user:{
                ...this.state.user,
                [event.target.name]:event.target.value
            }
        })
    }
    return (
      <>
        <div className="container ml-auto mr-auto mt-5" style={{width:"50%"}}>
          <h1 className="text-center">Sign In</h1>
          <div className="SignIn Container">
                <form onSubmit={SignInUser}>
                    <div className="form-group">
                        <label className="label">Email</label>
                        <input type="text" className="form-control" name="email" value={this.state.user.email} onChange={changeUserState} />
                    </div>
                    <div className="form-group">
                        <label className="label">Password</label>
                        <input type="password" className="form-control" name="password" value={this.state.user.password} onChange={changeUserState} />
                    </div>
                    <div className="form-group">
                        <button type="submit" className="btn btn-primary btn-block">Sign In</button>
                    </div>
                </form>
          </div>
        </div>
      </>
    );
  }
}

export default Show;
