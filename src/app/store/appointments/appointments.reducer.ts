import { createReducer } from "@ngrx/store";
import { AppointemetInterface } from "src/app/core/interface/appointment.inteface";


export const initialState: AppointemetInterface = {
    
  }
  
  export const appointmentReducer = createReducer(
     initialState,
    // on(loadAppointment, (state) => {
        
    //     return { ...state, };
    //  }),
    
  );