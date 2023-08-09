import { animate, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserInfo } from 'src/app/models/phonebook';
import { UserinfoService } from 'src/app/Services/userinfo/userinfo.service';

@Component({
  selector: 'app-address-list',
  templateUrl: './address-list.component.html',
  styleUrls: ['./address-list.component.css'],
  animations:[
   trigger('fade', [
    transition('void => *', [
      style({ opecity: 0}),
      animate(2000),
    ])
   ])
  ]
})
export class AddressListComponent implements OnInit {
  title = 'my_address';

  userInfo: UserInfo[] = []

  addorupdatemodalTitle: string = '';

  constructor(private addService: UserinfoService, private router: Router) { 
    // this.ngOnInit();
  }

  ngOnInit(): void {
    this.addService.getUserData()
    .subscribe({
      next: (addresslist) => {
        this.userInfo = addresslist
      },
      error: (response) => {
       console.log(response) 
      }
    })
  }

  AddList(){
    this.addService.getUserData()
    .subscribe({
      next:(_address) => {
        alert("Ready for add address...")
        this.router.navigate(['addinfo'])
      },
      error:(response) => {
        console.log(response);
    }
    })
  }

  // editaddress(){
  //   this.router.navigate(['editinfo'])
  // }

  deleteAddress(id: string){
    this.router.navigate(['deleteinfo'])
  }
}
