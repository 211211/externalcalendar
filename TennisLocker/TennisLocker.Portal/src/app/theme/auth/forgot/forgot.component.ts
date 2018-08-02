import { Component, OnInit } from "@angular/core";
import { FormComponentBase } from "../../../../bases/form.component.base";
import { FormBuilder } from "@angular/forms";
import { CustomValidators } from "../../../../bases/CustomValidators";
import { AccountsService, ForgetPasswordBindingModel } from "../../../../services/generated-services";
import { Http, RequestOptions, Headers } from "@angular/http";

declare var Configuration: any;

@Component({
    selector: "app-forgot",
    templateUrl: "./forgot.component.html",
    styleUrls: ["./forgot.component.scss"]
})
export class ForgotComponent extends FormComponentBase implements OnInit
{
    constructor(public fb: FormBuilder,
        public accountService: AccountsService,
        public http: Http)
    {
        super(fb);

        this.addFieldData("email", "", [CustomValidators.email(), CustomValidators.required()]);
        this.LoadForm();

    }

    ngOnInit()
    {
        document.querySelector("body").setAttribute("themebg-pattern", "theme1");
    }


    SendForm(form: any): void
    {

        let options: RequestOptions = new RequestOptions();
        options.headers = new Headers();
        options.headers.set("Content-Type", "application/x-www-form-urlencoded");

        let body = new URLSearchParams();
        body.set("email", form.email);

        this.http.post(Configuration.BaseUrl + "/accounts/forgetPassword", body.toString(), options)
            .subscribe(
                data =>
                {
                    console.log(data);
                },
                error =>
                {
                     
                });
    }

}
