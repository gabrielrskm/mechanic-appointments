import { Injectable, inject } from '@angular/core';
import { UserProfile } from '@angular/fire/auth';
import { Firestore, addDoc, collection, doc, setDoc } from '@angular/fire/firestore';
import { Observable,from,of } from 'rxjs';
import { AppointmentInterface } from '../interface/appointment.inteface';

@Injectable({
    providedIn: 'root'
})
export class DatabaseService {
   private firestore: Firestore = inject(Firestore);
   users$: Observable<UserProfile[]> | null = null;

   getUsers() {
      
   }

  setUsers() { }
  
  getUserInfo() {
    
  }

   setAppointmenet(){}

   getAppointment() { }
   
  getAppointments() {
     
   }
   
   async setAppointments(data: AppointmentInterface) {
        
     const cln = collection(this.firestore,'turnos')
     return addDoc(cln, data)
       
   }
   
   async updateAppointment(data: AppointmentInterface) {
       const cln = collection(this.firestore, 'turnos')
       return setDoc(doc(cln, data.id), data)
   }
   deleteUser() { }
   

   deleteAppointment(){}
}