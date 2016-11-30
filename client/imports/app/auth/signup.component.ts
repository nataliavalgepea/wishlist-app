import {Component, OnInit, NgZone} from '@angular/core';
import template from './signup.component.html';
import {FormGroup, FormBuilder, Validators} from "@angular/forms";
import {Router} from "@angular/router";

@Component({
    selector: 'signup',
    template
})
export class SignupComponent implements OnInit {
    signupForm: FormGroup;
    error: string;

    constructor(
        private router: Router,
        private zone: NgZone,
        private formBuilder: FormBuilder) {}

    ngOnInit() {
        this.signupForm = this.formBuilder.group({
            username: ['', Validators.required],
            password: ['', Validators.required]
        });

        this.error = '';
    }

    signup() {
        if (this.signupForm.valid) {
            Accounts.createUser({
                username: this.signupForm.value.username,
                password: this.signupForm.value.password
            }, (err) => {
                if (err) {
                    this.zone.run(() => {
                        this.error = err;
                    });
                } else {
                    this.router.navigate(['/']);
                }
            });
        }
    }
}
