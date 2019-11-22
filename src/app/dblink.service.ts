import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';

const endpoint = 'http://127.0.0.1:3000/';
const httpOptions = {
  headers: new HttpHeaders({
    'content-type': 'application/json'
  }),
}
@Injectable({
  providedIn: 'root'
})
export class DblinkService {

  constructor(private http:HttpClient) { 
    
  }
  registration(mydata):Observable<any>{
    return this.http.post(endpoint+'addUser',mydata);
  }

  getUserlist():Observable<any>{
    return this.http.get(endpoint+'getAllusers');
  }
  getSingleUser(uid):Observable<any>{
    return this.http.get(endpoint+'getSingleUser/'+uid);
  }
  updateUserDetails(formdata,uid):Observable<any>{
    return this.http.put(endpoint+'updateUser/'+uid,formdata);
  }
  deleteUser(uid):Observable<any>{
    return this.http.delete(endpoint+'deleteUser/'+uid)
  }
}
