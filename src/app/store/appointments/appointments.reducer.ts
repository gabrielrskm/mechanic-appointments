import { createReducer } from "@ngrx/store";
import { AppointmentInterface } from "src/app/core/interface/appointment.inteface";


export const initialState: AppointmentInterface = {
  id: "",
  date: "",
  init_time: "",
  end_time: "",
  status: false
}
  
  export const appointmentReducer = createReducer(
     initialState,
    // on(loadAppointment, (state) => {
        
    //     return { ...state, };
    //  }),
    
  );