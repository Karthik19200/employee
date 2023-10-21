import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';  //21
import { ApiService } from '../services/api.service';


@Component({
  selector: 'app-view-contact',
  templateUrl: './view-contact.component.html',
  styleUrls: ['./view-contact.component.css']
})
export class ViewContactComponent implements OnInit {

  contactId: string = ""    //to hold contact id

  contact: any = []  //to hold particular contact details

  groupId: string = ""  //to hold particular group id

  groupName: string = ""  //to hold

  constructor(private activatedroute: ActivatedRoute, private api: ApiService) { }  //step 21


  ngOnInit(): void {   // after 21
    this.activatedroute.params.subscribe((data: any) => {
      console.log(data);     //contactId: 'c1'
      this.contactId = data.contactId;
      console.log(this.contactId);  //c1

      //get particular contact details
      this.api.viewContacts(this.contactId).subscribe((data: any) => {
        console.log(data);
        this.contact = data
        this.groupId= data.groupId
        console.log(this.groupId);




        //get particular group name
        this.api.getGroupName(this.groupId).subscribe((data: any) => {
          console.log(data);
          this.groupName = data.name
          console.log(this.groupName);
        })

      })


    })
  }
}
