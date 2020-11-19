import axios from 'axios';

export const getUsers = () => async dispatch =>{

    try {
        const res =await axios.get('http://localhost:3002/Users');

        dispatch({
            type : 'GET_Users',
            payload : res.data
          })
    } catch (error) {
        alert(error)
    }

}

export const getUser = (id) => async dispatch =>{

    try {
        dispatch({
          type : 'GET_User',
          payload : id
         })
    } catch (error) {
        alert(error)
    }
    
}

export const deleteUser = (id) => dispatch => {
  
         axios.delete(`http://localhost:3002/Users/${id}`)
         .then(res => {
            dispatch({
                type : 'DELETE_User',
                payload : id 
             })
         })
         .catch(err => {
             alert(err)
         })
}


export const addUser = (user) =>async dispatch => {

    try {
        const res = await axios.post('http://localhost:3002/Users', user);

     dispatch({
        type : 'ADD_User',
        payload : res.data
      })
    } catch (error) {
        alert(error)
    }
    
}

export const updateUser = (user) =>async dispatch => {

    try {
        const res = await axios.put(`http://localhost:3002/Users/${user.id}`, user);

     dispatch({
        type : 'UPDATE_User',
        payload : res.data
      })
    } catch (error) {
        alert(error)
    }
    
}

