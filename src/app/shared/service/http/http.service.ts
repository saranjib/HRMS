import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ConfigurationService } from "./configuration.service";

@Injectable()
export class HttpService {
 
  // o bserve the full response
  // httpOptions = {
  //   headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  //   withCredentials: true,
  //   observe: 'response' as 'response'
  // };

  constructor(private http: HttpClient, private _config: ConfigurationService) { }

  // public makePostReq(request: any, api: string): Observable<any> {
  //   return this.http.post<any>((this._config.ApiUrl + api), request, { headers: new HttpHeaders({ 'Content-Type': 'application/json' }), withCredentials: true });
  // }
  getUsername(): string | null {
    const token = localStorage.getItem('token');
    if (token) {
      const tokenPayload = JSON.parse(atob(token.split('.')[1]));
      
      return tokenPayload['http://schemas.xmlsoap.org/ws/2005/05/identity/claims/name'] || null;

    }
    return null;
  }
  getUserId(): string | null {
    const token = localStorage.getItem('token');
    if (token) {
      const tokenPayload = JSON.parse(atob(token.split('.')[1]));
      
      return tokenPayload['UserId'] || null;
    }
    return null;
}

  public makePostReq(request: any, api: string): Observable<any> {
    
    const username = this.getUsername() || '';
    const userId = this.getUserId() || '';

    request.createdBy = username;
    request.updatedBy = username;
    request.empRegId = userId;
    request.statusName=username
     return this.http.post<any>(this._config.ApiUrl + api, request, { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) });  //  did not use this withCredentials: true
  }

  // public makeGetReq(api: string, params = {}): Observable<any> {
  //   return this.http.get((this._config.ApiUrl + api), { headers: new HttpHeaders({ 'Content-Type': 'application/json' }), params: params});
  // }
  public makeGetReq(api: string, params = {}): Observable<any> {
    debugger
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders({
        'Content-Type': 'application/json',
    });
    
    // Make the GET request with the specified API endpoint, headers, and params
    return this.http.get<any>(this._config.ApiUrl + api, { headers: headers, params: params });
}

  // public makeGetReq(api: string, params = {}): Observable<any> {
  //   return this.http.get((this._config.ApiUrl + api), { headers: new HttpHeaders({ 'Content-Type': 'application/json' }), params: params});
  // }
// this added by ganesh 10 April 2024 for department
  // public makePutReq(request: any, api: string): Observable<any> {
  //   return this.http.put<any>((this._config.ApiUrl + api), request, { headers: new HttpHeaders({ 'Content-Type': 'application/json' }), withCredentials: true });
  // }

  public makeDeleteReq(api: string): Observable<any> {
    return this.http.delete<any>((this._config.ApiUrl + api), { headers: new HttpHeaders({ 'Content-Type': 'application/json' }), withCredentials: true });
  }
  
  public makePatchReq(request: any, api :string){
      return this.http.patch((this._config.ApiUrl + api), request, { headers: new HttpHeaders({ 'Content-Type': 'application/json' }), withCredentials: true })
  }

  //**************************************************************************** */

  public makePostReqUser(request: any, api: string): Observable<any> {
    const username = this.getUsername() || '';
    const userId = this.getUserId() || '';

    request.createdBy = username;
    request.updatedBy = username;
    request.empRegId = userId;
    return this.http.post<any>(this._config.ApiUrlLogin + api, request, { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) });  //  did not use this withCredentials: true
 }
// this added by ganesh 10 April 2024
 public makePutReq(request: any, api: string): Observable<any> {
  return this.http.put<any>((this._config.ApiUrl + api), request, { headers: new HttpHeaders({ 'Content-Type': 'application/json'})});
 }

 public fetchEmpPersDtlId(): Observable<any> {
  
  return this.http.get<any>(this._config.ApiUrl + '/EmpPersDtls');
}

// for sending the email
public makePostReq2(request: any, api: string): Observable<any> {
  
  return this.http.post<any>(this._config.ApiUrlLogin + api, request, { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) });  //  did not use this withCredentials: true
}
}