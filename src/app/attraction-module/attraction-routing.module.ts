import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {AttractionPageComponent} from '../attraction-page/attraction-page.component';


const routes: Routes = [
    {
        path: '', component: AttractionPageComponent,
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AttractionRoutingModule {
}
