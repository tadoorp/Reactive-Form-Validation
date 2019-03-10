import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private _formBuilder : FormBuilder) { }

  registerForm : FormGroup;
  submitted = false;

  ngOnInit() {
    this.registerForm = this._formBuilder.group({
      firstName : ['',Validators.required],
      lastName : ['',Validators.required],
      email : ['',[Validators.required, Validators.email]],
      password : ['',[Validators.required, Validators.minLength(6)]],
      confirmPassword : ['',Validators.required]

    })
  }
  get f(){ return this.registerForm.controls; }
  onSubmit(){
    console.log(this.registerForm.value);
    console.log(this.registerForm);
    if(this.registerForm.invalid){
      return;
    }
    alert('success');
  }
  /* inputClass(arg){
    return (this.f.arg.touched && this.f.arg.errors);
  } */

}
