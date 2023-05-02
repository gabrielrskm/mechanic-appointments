export interface AppointmentInterface  {
   id: string;
   date: string;
   init_time: string;
   end_time: string;
   status: boolean;
   user?: string;
}