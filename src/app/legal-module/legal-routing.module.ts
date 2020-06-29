import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {PrivacyComponent} from 'src/app/legal-pages/privacy/privacy.component';
import {TermsAndConditionsComponent} from 'src/app/legal-pages/terms-and-conditions/terms-and-conditions.component';


const routes: Routes = [
  {
    path: 'privacy', component: PrivacyComponent
  },
  {
    path: 'terms-and-conditions', component: TermsAndConditionsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LegalRoutingModule {
}
