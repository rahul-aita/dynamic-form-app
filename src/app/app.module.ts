import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DynamicFormComponent } from './dynamic-form/dynamic-form.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { FormFieldModelComponent } from './form-field-model/form-field-model.component';

@NgModule({
  declarations: [
    AppComponent,
    DynamicFormComponent,
    FormFieldModelComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
