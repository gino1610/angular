import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/model/auth.service';

@Component({
  selector: 'auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})

export class AuthComponent {
  public username: string = '';
  public password: string = '';
  public errorMessage: string|null = null;

  constructor(
    private router: Router,
    private authService: AuthService
  ) {}

  authenticate(form: NgForm) {
    if (form.valid) {
      // perform authentication
      this.authService.authenicate(this.username, this.password)
        .subscribe(response => {
          console.log('authService.authenticate response');
          if (response) {
            this.router.navigateByUrl("/admin/main");
          }
          this.errorMessage = "Authentication Failed";
        });
    } else {
      this.errorMessage = "Form Data Invalid";
    }
  }

}
