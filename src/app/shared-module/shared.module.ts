import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {NavBarComponent} from '../shared-components/nav-bar/nav-bar.component';
import {FooterComponent} from '../shared-components/footer/footer.component';
import {CarouselModule} from 'ngx-owl-carousel-o';
import {DefaultHeaderComponent} from '../shared-components/default-header/default-header.component';


@NgModule({
    declarations: [
        NavBarComponent,
        FooterComponent,
        DefaultHeaderComponent
    ],
    imports: [
        CommonModule,
    ],
    exports: [
        NavBarComponent,
        FooterComponent,
        DefaultHeaderComponent
    ]
})
export class SharedModule {
}
