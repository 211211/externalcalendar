import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ToggleFullScreenDirective } from './fullscreen/toggle-fullscreen.directive';
import { AccordionAnchorDirective } from './accordion/accordionanchor.directive';
import { AccordionLinkDirective } from './accordion/accordionlink.directive';
import { AccordionDirective } from './accordion/accordion.directive';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { PERFECT_SCROLLBAR_CONFIG, PerfectScrollbarConfigInterface, PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { TitleComponent } from '../layout/admin/title/title.component';
import { CardComponent } from './card/card.component';
import { CardToggleDirective } from './card/card-toggle.directive';
import { ModalBasicComponent } from './modal-basic/modal-basic.component';
import { ModalAnimationComponent } from './modal-animation/modal-animation.component';
import { SpinnerComponent } from './spinner/spinner.component';
import { ClickOutsideModule } from 'ng-click-outside';
import { DataFilterPipe } from './elements/data-filter.pipe';
import { AccountsService, FacilityService } from "../../services/generated-services";

import { ApiHttpInterceptor } from "../../Interceptors/api.http.interceptor ";

const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
    suppressScrollX: true
};

@NgModule({
    imports: [
        CommonModule,
        NgbModule.forRoot(),
        HttpClientModule,
        PerfectScrollbarModule,
        ClickOutsideModule,
        HttpModule,
        FormsModule,
        ReactiveFormsModule 
    ],
    exports: [
        NgbModule,
        ToggleFullScreenDirective,
        AccordionAnchorDirective,
        AccordionLinkDirective,
        AccordionDirective,
        CardToggleDirective,
        HttpClientModule,
        PerfectScrollbarModule,
        TitleComponent,
        CardComponent,
        ModalBasicComponent,
        ModalAnimationComponent,
        SpinnerComponent,
        ClickOutsideModule,
        DataFilterPipe 
    ],
    declarations: [
        ToggleFullScreenDirective,
        AccordionAnchorDirective,
        AccordionLinkDirective,
        AccordionDirective,
        CardToggleDirective,
        TitleComponent,
        CardComponent,
        ModalBasicComponent,
        ModalAnimationComponent,
        SpinnerComponent,
        DataFilterPipe
    ],
    providers: [
        {
            provide: PERFECT_SCROLLBAR_CONFIG,
            useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG
        },
        AccountsService,
        FacilityService,
        HttpClientModule,
        { provide: HTTP_INTERCEPTORS, useClass: ApiHttpInterceptor, multi: true }

    ],
    schemas: [NO_ERRORS_SCHEMA]
})
export class SharedModule { }