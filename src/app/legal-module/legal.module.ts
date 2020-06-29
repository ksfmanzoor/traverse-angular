import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {PrivacyComponent} from 'src/app/legal-pages/privacy/privacy.component';
import {TermsAndConditionsComponent} from 'src/app/legal-pages/terms-and-conditions/terms-and-conditions.component';

import { LegalRoutingModule } from './legal-routing.module';


@NgModule({
  declarations: [
    PrivacyComponent,
    TermsAndConditionsComponent
  ],
  imports: [
    CommonModule,
    LegalRoutingModule
  ]
})
export class LegalModule { }
