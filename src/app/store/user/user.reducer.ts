import { createReducer } from "@ngrx/store";
import { UserInterface } from "src/app/core/interface/user.interface";


export const initialState: UserInterface = {
    id: "",
    firstName: "",
    lastName: "",
    email: ""
  }
  
  export const userReducer = createReducer(
     initialState,
    // on(loadAppointment, (state) => {
        
    //     return { ...state, };
    //  }),
    
  );