import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserInfo } from 'src/app/models/phonebook';
import { UserinfoService } from 'src/app/Services/userinfo/userinfo.service';

@Component({
  selector: 'app-add-info',
  templateUrl: './add-info.component.html',
  styleUrls: ['./add-info.component.css']
})
export class AddInfoComponent implements OnInit {

  addAddressRequest : UserInfo = {
    id: '',
    family: '',
    firstName: '',
    lastName: '',
    email: '',
    phone: 0,
    address: '',
    postalcode: 0,
    city: '',
    state: '',
    country: ''
  };

  // NewAddress(address: {family: string, firstname: string, lastname: string, 
  //                       email: string, phone: string, address: string, postalcode: string,
  //                        city: string, state: string, country: string}){
  //                         console.log(address);
  

  // addorupdatemodelTitle: string = '';
  userinfo: UserInfo[] = [];

  constructor(private addService: UserinfoService, private router: Router) { }

  ngOnInit(): void {
  }

  NewAddress(){
    // console.log(this.addAddressRequest);
    this.addService.addUserdata(this.addAddressRequest).subscribe({
      next: (data) => {
        alert("Address added successfully!!")
        this.router.navigate(['addresslist'])
      },
      error: (response) => {
        console.log(response); 
      }
    })
  }

}
