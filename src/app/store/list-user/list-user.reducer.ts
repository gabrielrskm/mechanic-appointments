import { createReducer } from "@ngrx/store";
import { ListUserInterface } from "src/app/core/interface/list-user.interface";


export const initialState: ListUserInterface = {
    id: "",
    firstName: "",
    lastName: "",
    email: ""
  }
  
  export const listUserReducer = createReducer(
     initialState,
    // on(loadAppointment, (state) => {
        
    //     return { ...state, };
    //  }),
    
  );