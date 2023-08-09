import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserInfo } from 'src/app/models/phonebook';
import { UserinfoService } from 'src/app/Services/userinfo/userinfo.service';

@Component({
  selector: 'app-edit-info',
  templateUrl: './edit-info.component.html',
  styleUrls: ['./edit-info.component.css']
})
export class EditInfoComponent implements OnInit {

  addAddressRequest !: UserInfo

  constructor(private route: ActivatedRoute, private _addService: UserinfoService, private router: Router) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe({
      next: (params) => {
        const id = params.get('id')
        if(id){
          this._addService.getaddress(id)
          .subscribe({
            next:(response) => {
              this.addAddressRequest = response
            }
          })
        }
      }
    })
  }

  updateAddress(){
    this._addService.updateAddress(this.addAddressRequest.id, this.addAddressRequest).subscribe({
      next: (response) => {
        this.router.navigate(['addresslist'])
      }
    })
  }

  deleteAddress(id: string){
    if (window.confirm("Are You Sure??")){
      this._addService.deleteAddress(id)
      .subscribe({
        next: (response) => {
          alert("Delete operation   Successfull!!")
          this.router.navigate(['addresslist'])
        }
      })
    } else {
      alert("Delete Aborted!!, Contact your Admin please")
    }
  }
}
