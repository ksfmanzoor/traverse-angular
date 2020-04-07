import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {NavBarComponent} from '../shared-components/nav-bar/nav-bar.component';
import {FooterComponent} from '../shared-components/footer/footer.component';
import {CarouselModule} from 'ngx-owl-carousel-o';


@NgModule({
    declarations: [
        NavBarComponent,
        FooterComponent
    ],
    imports: [
        CommonModule,
    ],
    exports: [
        NavBarComponent,
        FooterComponent
    ]
})
export class SharedModule {
}
