import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{

  err:number = 0;
  loginForm: FormGroup = new FormGroup({});

  constructor(private authService : AuthService,private router:Router,private formBuilder: FormBuilder,
            ){}

  ngOnInit(): void {
    this.createForm();
  }
  createForm() {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  
  
  onSubmit() {  
    this.authService.login(this.loginForm.value).subscribe((data: any)=>{
      let jwToken = data.body.token;
      this.authService.saveToken(jwToken);
      this.router.navigate(['/etudiants'])
    },(err) =>{
    this.err = 1;
    });

  }

  change(e:any){
    this.err = 0;
  }

}

