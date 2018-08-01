import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';



import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { AdminComponent } from './layout/admin/admin.component';
import { AuthComponent } from './layout/auth/auth.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from './shared/shared.module';
import { MenuItems } from './shared/menu-items/menu-items';
import { BreadcrumbsComponent } from './layout/admin/breadcrumbs/breadcrumbs.component';
import { FormsModule } from '@angular/forms';
import { SelectModule } from 'ng-select';
import { CurrentFacilityService } from '../services/current.facility.service';
import { FacilityPickerComponent } from './layout/admin/facility/facility.picker.component';


@NgModule({
    declarations: [
        AppComponent,
        AdminComponent,
        FacilityPickerComponent,
        AuthComponent,
        BreadcrumbsComponent
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        AppRoutingModule,
        SharedModule,
        FormsModule,
        SelectModule
    ],
    schemas: [],
    providers: [MenuItems,
        CurrentFacilityService],
    bootstrap: [AppComponent]
})
export class AppModule { }
