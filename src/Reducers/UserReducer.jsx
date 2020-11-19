const initialState = {
  Users: [],
  User: {
    name:"",
    username:"",
    email:"",
    phonenumber:"",
    address:""
},
};
const UserReducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_Users":
      return {
        ...state,
        Users: action.payload,
      };
    case "GET_User":
      return {
        ...state,
        User: state.Users.find((user)=>user.id==action.payload),
      };
    case "ADD_User":
      return {
        ...state,
        Users: [action.payload, ...state.Users],
      };
    case "UPDATE_User":
      debugger;
      return {
        ...state,
        Users: state.Users.map((user) =>
          user.id === action.payload.id ? (user = action.payload) : user
        ),
      };
    case "DELETE_User":
      return {
        ...state,
        Users: state.Users.filter((user) => user.id !== action.payload),
      };
    default:
        return state;
  }
};

export default UserReducer;
