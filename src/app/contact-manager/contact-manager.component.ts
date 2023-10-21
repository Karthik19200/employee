import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';
import { MyContact } from 'src/models/myContact';

@Component({
  selector: 'app-contact-manager',
  templateUrl: './contact-manager.component.html',
  styleUrls: ['./contact-manager.component.css']
})
export class ContactManagerComponent implements OnInit {
  // heading:string="Contant manager page"  // string interpolation

  allContacts: MyContact[] = []

  searchkey: string = '' //to hold user input

  url = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSz0rpSUTlYL4OvJJkvUYrjlWyjEC1e60yRuQ&usqp=CAU"

page:number=1;
count:number=0;
tableSize:number=5;
tableSizes:any=[2,4,5,20]


  //dependency injection
  constructor(private api: ApiService) { }

  ngOnInit(): void { //life cycle hook
    this.getAllContact()
  }

  getAllContact() {
    this.api.getAllContact().subscribe((result: any) => {
      console.log(result);
      this.allContacts = result

    })
  }
  // nameChange(){
  //   alert('name change')
  // }

  search(event: any) {
    this.searchkey = event.target.value
    console.log(event.target.value);

  }

  deleteContact(contactId: any) {
    this.api.deleteContact(contactId).subscribe((result: any) => {
      alert('contact deleted')
      this.getAllContact()
    })
  }

  onTableDataChange(event:any){
    this.page=event;
    this.getAllContact()
  }


 onTableSizeChange(event:any):void{
  this.tableSize=event.target.value;
  this.page=1;
  this.getAllContact()
 }

}
