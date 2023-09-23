import { Component, OnInit } from '@angular/core';
import { IFormData, IFormFiled } from './type';

@Component({
  selector: 'app-dynamic-form',
  templateUrl: './dynamic-form.component.html',
  styleUrls: ['./dynamic-form.component.scss']
})
export class DynamicFormComponent  implements OnInit{
public formFiled:IFormFiled[]=[];
public datas:any
public show:boolean=false;
constructor(){

}
ngOnInit(){
console.log("test")
}

addformfield(){
 const newField:IFormFiled={
   data: "",
   type: "text",
   placeholder: ''
 }
 this.formFiled.push(newField);
}

removeFormFiled(index:number){
this.formFiled.splice(index,1)
}

previewForm(){
this.show=true
}
savedData(event:any){
  if(event){
    this.datas=event
    console.log(event)
  }
}
}
