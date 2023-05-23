import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  showSideMenu: boolean | undefined;
  registrationForm: FormGroup;

  constructor(private formBuilder: FormBuilder,
    private activatedRoute: ActivatedRoute,
    private route : Router) {
    this.registrationForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  ngOnInit(): void {
    this.showSideMenu = this.activatedRoute.snapshot.data['showSideMenu'] ?? true;
  }


  onSubmit(): void {
    if (this.registrationForm.valid) {
      console.log(this.registrationForm.value);
    }
  }

  routeToAuth(){
    this.route.navigate(["auth"])
  }
}