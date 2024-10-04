import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HlmCardModule } from '@spartan-ng/ui-card-helm';
import { HlmButtonModule } from '@spartan-ng/ui-button-helm';
import { HlmLabelModule } from '@spartan-ng/ui-label-helm';
import { HlmInputModule } from '@spartan-ng/ui-input-helm';
import {
  AbstractControl,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  ValidatorFn,
  Validators,
} from '@angular/forms';
import { HlmFormFieldModule } from '@spartan-ng/ui-formfield-helm';

@Component({
  selector: 'ws-signup',
  standalone: true,
  imports: [
    CommonModule,
    HlmCardModule,
    HlmButtonModule,
    HlmInputModule,
    HlmLabelModule,
    ReactiveFormsModule,
    HlmFormFieldModule,
  ],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.scss',
})
export class SignupComponent {
  signupForm = new FormGroup({
    email: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
    confirmPassword: new FormControl('', [
      Validators.required,
      this.passwordMatchValidator(),
    ]),
  });

  passwordMatchValidator(): ValidatorFn {
    return (formGroup: AbstractControl): { [key: string]: any } | null => {
      const password = formGroup.parent?.get('password')?.value;
      const confirmPassword = formGroup.value;
      return password !== confirmPassword ? { mismatch: true } : null;
    };
  }

  onSubmit() {
    if (this.signupForm.valid) {
      console.log('Form submitted successfully:', this.signupForm.value);
    } else {
      console.log('Form is invalid');
    }
  }
}
