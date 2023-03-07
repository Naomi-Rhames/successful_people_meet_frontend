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
  
  
         default: 
         
         return {...state}
      }
  }