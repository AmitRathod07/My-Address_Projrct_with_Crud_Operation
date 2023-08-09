import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UserInfo } from 'src/app/models/phonebook';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserinfoService {
  baseApiUrl: string = environment.baseApiUrl;

  constructor(private http:HttpClient) { }

  getUserData(){
    return this.http.get<UserInfo[]>(this.baseApiUrl + '/AddressBook/AddressBook/GetAddressList');
    // return this.http.get<userInfo[]>('https://localhost:7021/AddressBook/AddressBook/GetAddressList')
  }

  addUserdata(addAddressRequest: UserInfo): Observable<UserInfo>{
    addAddressRequest.id="00000000-0000-0000-0000-000000000000"
    return this.http.post<UserInfo>(this.baseApiUrl+'/AddressBook/AddressBook/AddAddress', addAddressRequest)
  }

  getaddress(id: string): Observable<UserInfo>{
    alert(JSON.stringify(id))
    return this.http.get<UserInfo>(this.baseApiUrl+ "/AddressBook/AddressBook/GetAddress?Id=" + id)
  }

  updateAddress(id: string, updateAddressRequest: UserInfo) : Observable<UserInfo>{
    return this.http.put<UserInfo>(this.baseApiUrl+"/AddressBook/AddressBook/UpdateAddress"+id, updateAddressRequest)
  }

  deleteAddress(id: string): Observable<UserInfo>{
    alert(id)
    return this.http.delete<UserInfo>(this.baseApiUrl+"/AddressBook/AddressBook/DeleteAddress"+id)
  }
}
