import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HTTP_INTERCEPTORS } from "@angular/common/http";

import { ApiHttpInterceptor } from "../../../../Interceptors/api.http.interceptor";

import { ForgotComponent } from "./forgot.component";
import { ForgotRoutingModule } from "./forgot-routing.module";
import { SharedModule } from "../../../shared/shared.module";


@NgModule({
  imports: [
    CommonModule,
    ForgotRoutingModule,
      SharedModule,
      FormsModule,
      ReactiveFormsModule
  ],
    declarations: [ForgotComponent],
    providers: [{ provide: HTTP_INTERCEPTORS, useClass: ApiHttpInterceptor, multi: true }]
})
export class ForgotModule { }
