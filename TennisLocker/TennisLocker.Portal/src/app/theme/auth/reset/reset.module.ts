import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HTTP_INTERCEPTORS } from "@angular/common/http";

import { ApiHttpInterceptor } from "../../../../Interceptors/api.http.interceptor";

import { ResetComponent } from "./reset.component";
import { ResetRoutingModule } from "./reset-routing.module";
import { SharedModule } from "../../../shared/shared.module";


@NgModule({
    imports: [
        CommonModule,
        ResetRoutingModule,
        SharedModule,
        FormsModule,
        ReactiveFormsModule
    ],
    declarations: [ResetComponent],
    providers: [{ provide: HTTP_INTERCEPTORS, useClass: ApiHttpInterceptor, multi: true }]
})
export class ResetModule { }
