import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { MyContact } from 'src/models/myContact';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  baseUrl = 'http://localhost:3000/contacts'

  //dependency injection 
  constructor(private http: HttpClient) { } 

  //function for get all contacts
  getAllContact(): Observable<MyContact> {
    return this.http.get(this.baseUrl)
  }

  //api call for fetch particular employee details  
  viewContacts(contactId: string) {

    return this.http.get(`${this.baseUrl}/${contactId}`)  
  }



  getGroupName(groupId: string) {
    return this.http.get('http://localhost:3000/groups/' + groupId)
  }


  getAllGroups() {
    return this.http.get('http://localhost:3000/groups')
  }

  //api call for adding new contact to the server
  addContact(contactBody: any) {
    return this.http.post(this.baseUrl, contactBody)
  }

  //api call for deleting a contact in the server
  deleteContact(contactId: any) {

    return this.http.delete(`${this.baseUrl}/${contactId}`)
  }
  //api call for Updating a contact in the server
  updateContact(contactId:any,contactBody:any){
    return this.http.put(`${this.baseUrl}/${contactId}`,contactBody)
    
  }
}
