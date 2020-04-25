import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {AttractionRoutingModule} from './attraction-routing.module';
import {AttractionPageComponent} from '../attraction-page/attraction-page.component';
import {SharedModule} from '../shared-module/shared.module';


@NgModule({
    declarations: [
        AttractionPageComponent,
    ],
    imports: [
        CommonModule,
        AttractionRoutingModule,
        SharedModule
    ]
})
export class AttractionModule {
}
