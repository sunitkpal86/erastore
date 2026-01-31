import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Contact } from '../../services/contact';

@Component({
  selector: 'app-message',
  imports: [CommonModule],
  templateUrl: './message.html',
  styleUrl: './message.css'
})
export class Message implements OnInit {

  constructor(private contactService : Contact){
      //this.contactService.contactList().subscribe(data=> this.contacts = data);
  }
  contacts:any=[];
  ngOnInit(){
      this.contactService.contactList().subscribe(data=> this.contacts = data);
    }  
}
