import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';
import { MyContact } from 'src/models/myContact';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-contact',
  templateUrl: './add-contact.component.html',
  styleUrls: ['./add-contact.component.css']
})
export class AddContactComponent implements OnInit {

  allGroups: any = []   //to assign group value

  contact: MyContact = {}

  // contactId:string =""
  // contactName:string =""
  // photoUrl:string =""
  // phoneNum:string =""
  // email:string =""
  // companyName:string =""
  // title:string =""

  constructor(private api: ApiService, private router: Router) { }

  ngOnInit(): void {
    this.api.getAllGroups().subscribe((data: any) => {
      console.log(data);
      this.allGroups = data
      this.contact.groupId = 'Selct a Group'

    })
  }
  addContact() {
    this.api.addContact(this.contact).subscribe((data: any)=>{
      this.router.navigateByUrl('')
    })
  }
}
