import { OnInit } from "@angular/core";
import { FormGroup, ValidatorFn, AbstractControl, FormControl, FormBuilder } from "@angular/forms"
 

export abstract class FormComponentBase implements OnInit
{
  public loading = false;
  public responseErrors = {
    "message": ""
  };
  public Form: FormGroup;

  public formErrors: any = {};

  public validationMessages: any = {};

  private fieldDataList: IFormField[] = [];

  constructor(public fb: FormBuilder)
  {
  }

  ngOnInit(): void
  {
    
  }

  public LoadForm()
  {
    this.Form = this.fb.group({});
    for (let item in this.fieldDataList)
    {

      let field = this.fieldDataList[item];
      var control = new FormControl();

      if (field.value != null)
      {
        control.setValue(field.value);
      }

      let validatorList = <ValidatorFn[]>[];
      for (let j in field.validationRuleList)
      {
        let validationRule: IValidationRules = field.validationRuleList[j];
        validatorList.push(this.createValidator(validationRule.rules, this.getValidationMessage(field.name, validationRule.message), control));
      }

      if (validatorList.length != null)
      {
        control.setValidators(validatorList);
        this.formErrors[field.name] = "";
      }
      this.Form.addControl(field.name, control);
    }
    this.Form.valueChanges
      .subscribe(data => this.validate(data));
  }

  abstract SendForm(form: any): void;

  public getValidationMessage(filedName: string, message: string): string
  {
    return this.capitalizeFirstLetter(filedName) + message;
  }

  public OnFormSubmit()
  {
    this.validate();
    this.responseErrors["message"] = "";
    if (!this.Form.valid)
    {
      return;
    }
    this.loading = true;
    this.SendForm(this.Form.value);
  }

  public addFieldData(name: string, value: any, validarionRules: IValidationRules[])
  {
    this.fieldDataList.push({
      name: name,
      value: value,
      validationRuleList: validarionRules
    });
  }

  public validate(data?: any)
  {
    if (!this.Form) { return; }

    for (const field in this.formErrors)
    {
      if (this.formErrors.hasOwnProperty(field))
      {
        this.formErrors[field] = "";
        const control: any = this.Form.get(field);

        if (control && (data ? control.dirty : true) && !control.valid)
        {
          this.formErrors[field] += control.errors.error + " ";
        }
      }
    }
  }

  private createValidator(ruleList: string[], message: string, control: AbstractControl)
  {
    return (control: AbstractControl): { [key: string]: any } =>
    {
      if (control != null && control.value != null)
      {
        for (let i in ruleList)
        {
          let regex = new RegExp(ruleList[i]);

          if (!regex.test(control.value))
          {
            return { "error": message };
          }
        }
      }
      return <any>null;
    };
  }

  private capitalizeFirstLetter(str: string): string
  {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }

}


export interface IValidationRules {
  rules: string[];
  message: string;
}
export interface IFormField {
  name: string;
  value: any;
  validationRuleList: IValidationRules[];
}
