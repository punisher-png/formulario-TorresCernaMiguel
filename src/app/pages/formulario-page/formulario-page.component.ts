import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators, AbstractControl} from '@angular/forms';

@Component({
  selector: 'app-formulario-page',
  templateUrl: './formulario-page.component.html',
  styleUrls: ['./formulario-page.component.css']
})
export class FormularioPageComponent {
  firstNameControl = new FormControl('', [Validators.required, Validators.minLength(5)])
  lastNameControl = new FormControl('', [Validators.required])
  emailControl = new FormControl('', [Validators.email, Validators.required])
  passwordControl = new FormControl('', [Validators.required, Validators.minLength(6)])
  repeatPasswordControl = new FormControl('', [Validators.required, Validators.minLength(6)])
  streetNameControl = new FormControl('', [Validators.required])
  streetDirectionControl = new FormControl('', [Validators.required])
  signedTermsControl = new FormControl(false, [Validators.requiredTrue])
  countryControl= new FormControl('', [Validators.required])


  registerForm = new FormGroup({
    firstName: this.firstNameControl,
    lastName: this.lastNameControl,
    email: this.emailControl,
    password: this.passwordControl,
    repeatPassword: this.repeatPasswordControl,
    location: new FormGroup({
      streetName: this. streetNameControl,
      streetDirection: this.streetDirectionControl,
      country: this.countryControl
    }),
    signedTerm: this.signedTermsControl,
  }, {
    validators: [
      this.passwordsMatchValidator()
    ]
  })
  passwordsMatchValidator() {
    return () => {
      if (this.passwordControl.value !== this.repeatPasswordControl.value) {
        return {
          passwordsMatch: true 
        }
      }
      return null
    }
  }
  onSubmit(){
    console.log(this.registerForm.value)
  }
}


