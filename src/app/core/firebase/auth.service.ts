import { Injectable, inject } from '@angular/core';
import {
    Auth, UserCredential,
    createUserWithEmailAndPassword,
    sendEmailVerification,
    signInWithEmailAndPassword,
    user,
    GoogleAuthProvider,
    FacebookAuthProvider,
    signInWithPopup,
    GithubAuthProvider
} from '@angular/fire/auth';

@Injectable({
    providedIn: 'root'
})
export class AuthService {
    private auth: Auth = inject(Auth);
    user$ = user(this.auth);
    uid : string | null = null

    constructor() {
        this.user$.subscribe((user) => {
            this.uid = user?.uid || null;
        })
    }

    get UserId() {
        return this.uid;
    }


    async createUserWithEmail(user: string, pass: string) : Promise<UserCredential | null> {
        const res = await createUserWithEmailAndPassword(this.auth, user, pass);
        sendEmailVerification(res.user);
        return res;
        
    }

    async signInWithEmail(user: string, pass: string) {
        return signInWithEmailAndPassword(this.auth,user, pass);
    }

    async logOut() {
        return await this.auth.signOut();
    }

    async signInWithGoogle() {
        const google = new GoogleAuthProvider();
        const res = signInWithPopup(this.auth, google);
        return res
    }

    async signInWithFacebook() {
        const facebook = new FacebookAuthProvider();
        const res = signInWithPopup(this.auth, facebook);
        return res
    }

    async signInWithGithub() {
        const github = new GithubAuthProvider();
        const res = signInWithPopup(this.auth, github);
        return res;
    }


}