import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormPickerComponent } from './form-picker.component';
import {FormPickerRoutingModule} from './form-picker-routing.module';
import {SharedModule} from '../../../shared/shared.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {ColorPickerModule} from 'ngx-color-picker';

@NgModule({
  imports: [
    CommonModule,
    FormPickerRoutingModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    ColorPickerModule
  ],
  declarations: [FormPickerComponent]
})
export class FormPickerModule { }
