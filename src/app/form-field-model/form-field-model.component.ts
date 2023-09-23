import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IFormData, IFormFiled } from '../dynamic-form/type';
import { Form } from '@angular/forms';

@Component({
  selector: 'app-form-field-model',
  templateUrl: './form-field-model.component.html',
  styleUrls: ['./form-field-model.component.scss']
})
export class FormFieldModelComponent implements OnInit {

  @Input() filed!:IFormFiled
  @Output() dynamicData=new EventEmitter<void>()
  @Output() remove=new EventEmitter<void>()
  public formData:IFormData = {
    data: '',
    type: '',
    comments: ''
  };
 constructor(){

 }

 ngOnInit(){

 }
 
 removeField(){
  this.remove.emit()
 }



// Handle form submission
save(formData: any) {
  // formData contains the values of form inputs
  console.log(formData);
  this.dynamicData.emit(formData)
  // You can access individual values like this:
  const inputValue = formData.data;
  const inputType = formData.type;
  const comments = formData.comments;

  // Perform any other actions you need with the form data
}
}
