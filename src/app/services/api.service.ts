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
  constructor(private http: HttpClient) { } // hover for quick fix (then it will import)

  //function for get all contacts
  getAllContact(): Observable<MyContact> {
    return this.http.get(this.baseUrl)
  }

  //api call for fetch particular contact details   //after 21
  viewContacts(contactId: string) {

    return this.http.get(`${this.baseUrl}/${contactId}`)  //hhtp://localhost:3000/contacts/c2
  }


  //api call to fetch group names
  getGroupName(groupId: string) {
    return this.http.get('http://localhost:3000/groups/' + groupId)
  }

  //api call to fetch group details
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

  updateContact(contactId:any,contactBody:any){
    return this.http.put(`${this.baseUrl}/${contactId}`,contactBody)
    
  }
}
