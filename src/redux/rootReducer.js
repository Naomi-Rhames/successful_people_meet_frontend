const initialUser = {
    email: "",
    phone_number: "",
    id: null
  };
  
  const initialProfile = {
      first_name: "",
      last_name: "",
      age: "",
      profile_image: "",
      status: "",
      about_me: "",
      occupation: "",
      hobbies: "",
      location: "",
      id: null
  };
  
  const initialState = {
      setProfile: initialProfile,
      setUser: initialUser
  };
  
  export function rootReducer(state=initialState, action ){
      switch(action.type){
           case "SET_USER":
            return {...state, user: action.payload }
         default: 
         
         return {...state}
      }
  }