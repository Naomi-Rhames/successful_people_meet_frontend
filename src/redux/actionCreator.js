export const submitSignup = (user) => {
    return dispatch => fetch("http://127.0.0.1:3000/a1/v1/users", {
        method: 'POST', // or 'PUT'
        headers: {
        'Content-Type': 'application/json',
        },
        body: JSON.stringify(user),
     } )
     .then(res => console.log(handleUserRespons) )
  }


  function handleUserResponse(res, dispatch){
    if (res.ok) {
      res.json()
      .then(response => {
        localStorage.token = response.token
        dispatch({type: "SET_USER", payload: response.user})
      })
    } else {
      res.json()
      .then(res => alert(res.errors))
    }
    }
    