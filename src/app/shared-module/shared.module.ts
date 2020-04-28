import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {NavBarComponent} from '../shared-components/nav-bar/nav-bar.component';
import {FooterComponent} from '../shared-components/footer/footer.component';
import {DefaultHeaderComponent} from '../shared-components/default-header/default-header.component';
import {ImageBoxComponent} from '../shared-components/image-box/image-box.component';


@NgModule({
    declarations: [
        NavBarComponent,
        FooterComponent,
        DefaultHeaderComponent,
        ImageBoxComponent
    ],
    imports: [
        CommonModule,
    ],
    exports: [
        NavBarComponent,
        FooterComponent,
        DefaultHeaderComponent,
        ImageBoxComponent
    ]
})
export class SharedModule {
}
