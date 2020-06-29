import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';

import {VerifyUserRoutingModule} from 'src/app/verify-user-module/verify-user-routing.module';
import {VerifyUserComponent} from 'src/app/verify-user/verify-user.component';


@NgModule({
  declarations: [
    VerifyUserComponent,
  ],
  imports: [
    CommonModule,
    VerifyUserRoutingModule
  ]
})
export class VerifyUserModule { }
