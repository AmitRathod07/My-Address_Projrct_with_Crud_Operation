import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserInfo } from 'src/app/models/phonebook';
import { UserinfoService } from 'src/app/Services/userinfo/userinfo.service';

@Component({
  selector: 'app-delete-info',
  templateUrl: './delete-info.component.html',
  styleUrls: ['./delete-info.component.css']
})
export class DeleteInfoComponent implements OnInit {

  dltAddressRequest!:UserInfo;

  constructor(private route: ActivatedRoute, private _addService: UserinfoService, private router: Router) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe({
      next: (params) => {
        const id = params.get('id')
        if(id){
          this._addService.getaddress(id)
          .subscribe({
            next: (response) => {
              this.dltAddressRequest = response
            }
          })
        }
      }
    })
  }

  dltAddress(id: string){
    if(window.confirm("Are You Sure?")){
      this._addService.deleteAddress(id)
      .subscribe({
        next: (response) => {
          alert("Delete Address Successfull!!")
          this.router.navigate(['addresslist'])
        }
      })
    } else {
      alert("Delete Aborted!, Contact Your Admin")
    }
  }

}
