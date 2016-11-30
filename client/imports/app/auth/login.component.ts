import {Component, OnInit, NgZone} from '@angular/core';
import template from './login.component.html';
import {FormGroup, FormBuilder, Validators} from "@angular/forms";
import {Router} from "@angular/router";

@Component({
    selector: 'login',
    template
})
export class LoginComponent implements OnInit {
    loginForm: FormGroup;
    error: string;

    constructor(private router: Router,
                private zone: NgZone,
                private formBuilder: FormBuilder) {
    }

    ngOnInit() {
        this.loginForm = this.formBuilder.group({
            username: ['', Validators.required],
            password: ['', Validators.required]
        });

        this.error = '';
    }

    login() {
        if (this.loginForm.valid) {
            Meteor.loginWithPassword(this.loginForm.value.username, this.loginForm.value.password,
                (err) => {
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
