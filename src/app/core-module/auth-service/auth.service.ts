
// import { Injectable } from '@angular/core';
// import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
// import { Router } from '@angular/router';
// import { Observable, of, throwError } from 'rxjs';
// import { catchError, map, tap } from 'rxjs/operators';

// @Injectable({
//   providedIn: 'root'
// })
// export class AuthService {
//   jwtHelper: any;

//   constructor(private http: HttpClient, private router: Router) { }
  
//   getToken(): string | null {
//     return localStorage.getItem('token');
//   }

//   isLoggedIn(): boolean {
//     return !!localStorage.getItem('token');
//   }
//   login(username: string, password: string, deviceId: string, rememberLogin: boolean, returnUrl: string): Observable<any> {
//     debugger
//     const payload = { username, password, deviceId, rememberLogin, returnUrl };
//     return this.http.post<any>('https://ecomidentity.koiv.in/api/Auth/login', payload)
//       .pipe(
//         map(response => {
//           localStorage.setItem('token',response.data.token);
//           localStorage.setItem('mainmenu',response.data.mainMenu);
//           return response;
//         }),
//         catchError(error => {
//           return throwError(new Error(error.error));
//         })
//       );
//   }

//   logout(): void {
//     localStorage.removeItem('token');
//     this.router.navigate(['login']);
//   }

//   //for role 
//   getUserRoles(): Observable<string[]> {
//     debugger
//     const token = localStorage.getItem('token');
//     if (!token) {
//       return throwError('Token is not available.');
//     }

//     // Decode the token to extract roles
//     const decodedToken = this.decodeToken(token);
//     const roles = decodedToken['http://schemas.microsoft.com/ws/2008/06/identity/claims/role'];

//     return roles ? of(roles) : throwError('Roles not found in token.');
//   }

//   private decodeToken(token: string): any {
//     const base64Url = token.split('.')[1];
//     const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
//     return JSON.parse(window.atob(base64));
//   }
//   }

import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class AuthService {
  jwtHelper: any;
  mainMenuItems: string[] = [];
  constructor(private http: HttpClient, private router: Router) { }

  getToken(): string | null {
    return localStorage.getItem('token');
  }

  isLoggedIn(): boolean {
    return !!localStorage.getItem('token');
  }

  login(username: string, password: string, deviceId: string, rememberLogin: boolean, returnUrl: string): Observable<any> {
    debugger
    const payload = { username, password, deviceId, rememberLogin, returnUrl };
    return this.http.post<any>('https://ecomidentity.koiv.in/api/Auth/login', payload)
      .pipe(
        map(response => {
          localStorage.setItem('token', response.data.token);
          this.mainMenuItems = response.data.mainMenu.split('_');
          localStorage.setItem('mainmenu', JSON.stringify(this.mainMenuItems));

          return response;
        }),
        catchError(error => {
          return throwError(new Error(error.error));
        })
      );
  }

  handleLoginResponse(response: any): Observable<any> {
    if (response.statusCode === 200) {
      return response;
    } else {
      // Handle error or redirect if needed
      console.error('Login failed. Redirecting...');
      this.router.navigate(['login']);
      return throwError('Login failed');
    }
  }

  logout(): void {
    localStorage.removeItem('token');
    this.router.navigate(['login']);
  }

  // For role 
  // getUserRoles(): Observable<string[]> {
  //   const token = localStorage.getItem('token');
  //   if (!token) {
  //     return throwError('Token is not available.');
  //   }

  //   // Decode the token to extract roles
  //   const decodedToken = this.decodeToken(token);
  //   const roles = decodedToken['http://schemas.microsoft.com/ws/2008/06/identity/claims/role'];

  //   return roles ? of(roles) : throwError('Roles not found in token.');
  // }

  private decodeToken(token: string): any {
    const base64Url = token.split('.')[1];
    const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
    return JSON.parse(window.atob(base64));
  }
}
