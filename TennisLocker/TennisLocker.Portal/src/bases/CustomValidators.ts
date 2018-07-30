import { FormComponentBase, IValidationRules } from "./form.component.base";

export class CustomValidators
{
  private static MinLengthMessage(minLength) { return " must to have at least " + minLength + " symbols" }

  private static MaxLengthMessage(maxLength) { return " must to have at most " + maxLength + " symbols" }

  private static RequiredMessage() { return " is required" }

  private static PatternMessage() { return " is not a valid email" }

  private static MinLengthRegEx(minLength) { return "^.{" + minLength + ",}$" }

  private static MaxLengthRegEx(maxLength) { return "^\\s*([^\\s]\\s*){0," + maxLength + "}$" }

  private static RequiredRegEx() { return "^(?!\\s*$)" }

  private static EmailFormatRegEx() { return "[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$" }

  public static required(): IValidationRules
  {
    return <IValidationRules>{
      rules: [this.RequiredRegEx()],
      message: this.RequiredMessage()
    }
  }

  public static pattern(regEx): IValidationRules
  {
    return <IValidationRules>{
      rules: [regEx],
      message: this.PatternMessage()
    }
  }

  public static email(): IValidationRules
  {
    return <IValidationRules>{
      rules: [this.EmailFormatRegEx()],
      message: this.PatternMessage()
    }
  }

  public static minLength(minLength): IValidationRules
  {
    return <IValidationRules>{
      rules: [this.MinLengthRegEx(minLength)],
      message: this.MinLengthMessage(minLength)
    }
  }

  public static maxLength(maxLength): IValidationRules
  {
    return <IValidationRules>{
      rules: [this.MaxLengthRegEx(maxLength)],
      message: this.MaxLengthMessage(maxLength)
    }
  }
}
