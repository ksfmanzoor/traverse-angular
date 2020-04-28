import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {AllDataRoutingModule} from './all-data-routing.module';
import {SharedModule} from '../shared-module/shared.module';
import {AllDataPageComponent} from '../all-data-page/all-data-page.component';
import {AllDestinationsComponent} from '../all-data-page/all-destinations/all-destinations.component';


@NgModule({
    declarations: [
        AllDataPageComponent,
        AllDestinationsComponent,
    ],
    imports: [
        CommonModule,
        AllDataRoutingModule,
        SharedModule
    ]
})
export class AllDataModule {
}
