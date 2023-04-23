
import { ActionReducerMap } from '@ngrx/store';
import { UserInterface} from '../core/interface/user.interface';
import { AppointemetInterface } from '../core/interface/appointment.inteface';
import { userReducer } from './user/user.reducer';
import { appointmentReducer } from './appointments/appointments.reducer';
import { ListUserInterface } from '../core/interface/list-user.interface';
import { listUserReducer } from './list-user/list-user.reducer';

export interface AppState {
  user: UserInterface,
  appointment: AppointemetInterface,
  listUser : ListUserInterface
  
}

export const ROOT_REDUCERS : ActionReducerMap <AppState> = {
  user: userReducer,
  appointment: appointmentReducer,
  listUser : listUserReducer
  }