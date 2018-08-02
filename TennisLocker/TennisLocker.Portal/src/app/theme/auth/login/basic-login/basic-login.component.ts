import { Component, OnInit } from "@angular/core";
import { FormBuilder } from "@angular/forms"
import { Http, Headers, RequestOptionsArgs, RequestOptions } from "@angular/http";
import { Router, ActivatedRoute } from "@angular/router";

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

    baseUrl: string = "";

    constructor(public accountService: AccountsService,
        public fb: FormBuilder,
        public router: Router,
        public http: Http,
        public activatedRoute: ActivatedRoute,
    )
    {
        super(fb);
        this.addFieldData("email", "", [CustomValidators.email(), CustomValidators.required()]);
        this.addFieldData("password", "", [CustomValidators.required()]);
        localStorage.setItem("session", "");
        this.LoadForm();
    }

    ngOnInit()
    {
        document.querySelector("body").setAttribute("themebg-pattern", "theme1");  // template related


        this.activatedRoute.params.subscribe(params =>
        {
            this.baseUrl = params["redirect"] || "";

        });

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

                    if (this.baseUrl)
                    {
                        this.router.navigate([decodeURIComponent(this.baseUrl)]);
                    } else
                    {
                        this.router.navigate(["dashboard"]);
                    }

                },
                error =>
                {
                    this.responseErrors.message = error.json().error_description;
                });
    }


}
