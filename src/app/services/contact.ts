import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class Contact {  
  constructor(private http: HttpClient ) {}
  contactList(){
     const url = "http://era-soft.southindia.cloudapp.azure.com/erasoft/api/contacts";
   // const url = "https://localhost:7175/api/contacts";
    return this.http.get(url);
  }
}
