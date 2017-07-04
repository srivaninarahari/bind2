import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
   firstname : string;
   lastname : string;
   title : string;
  constructor() {
     
   }
//values that are intialized onInit
  ngOnInit() {
    this.firstname= "SREEVANI";
    this.lastname = "NARAHARI";
  this.title = "";
  }
  //function logic  to  place  input values in title
  onclick(firstname:string, lastname:string){

      console.log(firstname + lastname);
      this.title = firstname + lastname;
      
}


}