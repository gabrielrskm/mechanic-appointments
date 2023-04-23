import { Injectable, inject } from '@angular/core';
import { Auth,UserCredential,createUserWithEmailAndPassword,sendEmailVerification,signInWithEmailAndPassword  } from '@angular/fire/auth';

@Injectable({
    providedIn: 'root'
})
export class AuthService {
    private auth: Auth = inject(Auth);

    async createUserWithEmail(user: string, pass: string) : Promise<UserCredential | null> {
        const res  = await createUserWithEmailAndPassword(this.auth, user, pass);
        try {
            console.log('Usuario creado correctamente correcto')
            sendEmailVerification(res.user);
            return res;
        }
        catch (error) {
            console.log(error);
            return null;
        }
    }

    async signInWithEmail(user: string, pass: string): Promise<UserCredential | null> {
        try {
            const res  = await signInWithEmailAndPassword(this.auth,user, pass);
            console.log('Usuario '+res.user.email+' logueado correctamente')
            return res;
        }
        catch (error) {
            console.log(error);
            return null;
        }
    }
}