import { Component, OnInit } from "@angular/core";
import { FormBuilder } from "@angular/forms"
import { Http, Headers, RequestOptionsArgs, RequestOptions } from "@angular/http";
import { Router } from "@angular/router";

import { AccountsService } from "../../../../../services/generated-services";
import { FormComponentBase } from "../../../../../bases/form.component.base";
import { CustomValidators } from "../../../../../bases/CustomValidators";

declare var Configuration: any;

@Component({
    selector: "app-basic-login",
    templateUrl: "./basic-login.component.html",
    styleUrls: ["./basic-login.component.scss"]
})
export class BasicLoginComponent extends FormComponentBase implements OnInit
{

    constructor(public accountService: AccountsService,
        public fb: FormBuilder,
        public router: Router,
        public http: Http
    )
    {
        super(fb);
        this.addFieldData("email", "", [CustomValidators.email(), CustomValidators.required()]);
        this.addFieldData("password", "", [CustomValidators.required()]);

        this.LoadForm();
    }

    ngOnInit()
    {
        document.querySelector("body").setAttribute("themebg-pattern", "theme1");  // template related
    }

    SendForm(form): void
    {
        let options: RequestOptions = new RequestOptions();
        options.headers = new Headers();
        options.headers.set("Content-Type", "application/x-www-form-urlencoded");

        let body = new URLSearchParams();
        body.set("username", form.email);
        body.set("password", form.password);
        body.set("grant_type", "password");
        body.set("client_Id", "mobile");


        this.http.post(Configuration.BaseUrl + "/oauth/token", body.toString(), options)
            .subscribe(
                data =>
                {
                    localStorage.setItem("session", data.json().access_token);
                    this.router.navigate(["dashboard/default"]);
                },
                error =>
                {
                    this.responseErrors.message = error.json().error_description;
                });
    }


}
