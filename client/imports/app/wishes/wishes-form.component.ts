import {Component, OnInit} from '@angular/core';
import template from './wishes-form.component.html';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {WishesService} from "./wishes.service";
import {Router} from "@angular/router";
import {InjectUser} from "angular2-meteor-accounts-ui";
import {Meteor} from 'meteor/meteor';

@Component({
    selector: 'wishes-form',
    template
})
@InjectUser('user')
export class WishesFormComponent implements OnInit {
    addWishForm: FormGroup;
    user: Meteor.User;

    constructor(private wishesService: WishesService,
                private formBuilder: FormBuilder,
                private router: Router) {
    }

    ngOnInit() {
        this.addWishForm = this.formBuilder.group({
            title: ['', Validators.required],
            description: [''],
            price: ['', Validators.required]
        });
        console.log(this.user);
    }

    addWish(): void {
        if (this.addWishForm.valid) {
            this.wishesService.addWish(this.addWishForm.value);

            this.addWishForm.reset();

            this.router.navigate(['/']);
        }
    }

}
