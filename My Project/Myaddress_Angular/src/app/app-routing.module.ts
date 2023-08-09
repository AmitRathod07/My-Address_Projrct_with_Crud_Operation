import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// import { AppRoutingModule } from './app-routing.module';
import { AddInfoComponent } from './Components/userdata/add-info/add-info.component';
import { DeleteInfoComponent } from './Components/userdata/delete-info/delete-info.component';
import { EditInfoComponent } from './Components/userdata/edit-info/edit-info.component';
import { AddressListComponent } from './Components/users/address-list/address-list.component';
import { UserListComponent } from './Components/users/user-list/user-list.component';
// import { MyAdminComponent } from './Components/my-admin/my-admin.component';

const routes: Routes = [{
  path: 'userlist',
  component: UserListComponent
},
{
  path: 'addresslist',
  component: AddressListComponent
},
{
  path: 'addinfo',
  component: AddInfoComponent
},
{
  path: 'editinfo',
  component: EditInfoComponent
},
{
  path: 'deleteinfo',
  component: DeleteInfoComponent
},
{
  path: 'userdata/edit/:id',
  component: EditInfoComponent
},
{
  path: 'userdata/delete/:id',
  component: DeleteInfoComponent
}
// {
//   path: 'myadmin',
//   component: MyAdminComponent
// }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
