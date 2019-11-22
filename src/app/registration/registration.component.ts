import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DblinkService } from '../dblink.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  registerForm: FormGroup;
  submitted = false;
  constructor(private formBuilder: FormBuilder, private userHtpp: DblinkService, private router: Router) { }

    ngOnInit() {
        this.registerForm = this.formBuilder.group({
  
            fullName: ['', Validators.required],
            // lastName: ['', Validators.required],
            email: ['', [Validators.required, Validators.email]],
            phoneNum: ['', [Validators.required, Validators.maxLength(13), Validators.minLength(10)]],
            jobType: ['', Validators.required],
            pwd: ['', [Validators.required, Validators.minLength(6)]],
            // confirmPassword: ['', Validators.required],
            // acceptTerms: [false, Validators.requiredTrue]
        });
    }

    // convenience getter for easy access to form fields
    get f() { return this.registerForm.controls; }

    onSubmit() {
        console.log(this.registerForm.value);
        this.submitted = true;

        // stop here if form is invalid
        if (this.registerForm.invalid) {
            return;
        }
        // console.log(this.registerForm.value);
        // display form values on success
        alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.registerForm.value, null, 4));

        console.log(this.registerForm.value);
        this.userHtpp.registration(this.registerForm.value).subscribe(data=>{
        // this.router.navigate(['/user-list']);
    });
    }
    // onReset() {
    //     this.submitted = false;
    //     this.registerForm.reset();
    // }
}
