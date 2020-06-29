import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {VerifyUserComponent} from 'src/app/verify-user/verify-user.component';


const routes: Routes = [
  {
    path: '', component: VerifyUserComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VerifyUserRoutingModule { }
