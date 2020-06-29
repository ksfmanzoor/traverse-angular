import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {ResetPageComponent} from 'src/app/reset-page/reset-page.component';


const routes: Routes = [
  {
    path: '', component: ResetPageComponent,
  },
  {
    path: ':resetToken', component: ResetPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ResetPasswordRoutingModule {
}
