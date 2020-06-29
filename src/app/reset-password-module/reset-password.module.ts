import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {ResetPageComponent} from 'src/app/reset-page/reset-page.component';
import {ResetPasswordConfirmComponent} from 'src/app/reset-page/reset-password-confirm/reset-password-confirm.component';
import {ResetPasswordRequestComponent} from 'src/app/reset-page/reset-password-request/reset-password-request.component';

import {ResetPasswordRoutingModule} from './reset-password-routing.module';


@NgModule({
  declarations: [
    ResetPageComponent,
    ResetPasswordRequestComponent,
    ResetPasswordConfirmComponent,
  ],
  imports: [
    CommonModule,
    ResetPasswordRoutingModule,
    FormsModule
  ]
})
export class ResetPasswordModule { }
