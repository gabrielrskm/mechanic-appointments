import { Router, UrlTree } from '@angular/router';
import { inject } from '@angular/core';
import { AuthService } from 'src/app/core/firebase/auth.service';
import { map } from 'rxjs';

export const authGuard = () => {
   const redirect = inject(Router).createUrlTree(['/auth']);
   const fireService = inject(AuthService);
   return fireService.user$.pipe(map((user) => user ? true : redirect))
}
