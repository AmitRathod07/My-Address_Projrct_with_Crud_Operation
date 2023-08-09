import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddInfoComponent } from './Components/userdata/add-info/add-info.component';
import { EditInfoComponent } from './Components/userdata/edit-info/edit-info.component';
import { DeleteInfoComponent } from './Components/userdata/delete-info/delete-info.component';
import { AddressListComponent } from './Components/users/address-list/address-list.component';
import { UserHeaderComponent } from './Components/users/user-header/user-header.component';
import { UserListComponent } from './Components/users/user-list/user-list.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterTestingModule } from "@angular/router/testing";
// import { MyAdminComponent } from './my-admin/my-admin.component';
import { RouterModule, Routes } from '@angular/router';


@NgModule({
  declarations: [
    AppComponent,
    AddInfoComponent,
    EditInfoComponent,
    DeleteInfoComponent,
    AddressListComponent,
    UserHeaderComponent,
    UserListComponent,
    // MyAdminComponent
  ],
  imports: [
    BrowserModule,
    // AppRoutingModule,
    RouterTestingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
