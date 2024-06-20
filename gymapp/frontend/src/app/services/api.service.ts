import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private baseUrl: string = 'http://localhost:3000/enquiry'

  constructor(private http: HttpClient) { }

  postRegistration(registerObj: User){
    return this.http.post<User>(`${this.baseUrl}`, registerObj)
  }

  getRegisteredUser(registerObj: User){
    return this.http.get<User[]>(`${this.baseUrl}`)
  }

  updateRegisterUser(registerObj: UserActivation, id: number){
    return this.http.put<User>(`${this.baseUrl}/${id}`, registerObj)
  }
  
  deleteRegisteredUser(id: number){
    return this.http.delete<User>(`${this.baseUrl}/${id}`)
  }

  getRegisteredUserId(id: number){
    return this.http.get<User>(`${this.baseUrl}/${id}`)
  }
}
