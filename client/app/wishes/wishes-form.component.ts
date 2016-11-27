import {Component, OnInit} from '@angular/core';
import template from './wishes-form.component.html';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {WishesService} from "./wishes.service";

@Component({
    selector: 'wishes-form',
    template
})
export class WishesFormComponent implements OnInit {
    addWishForm: FormGroup;

    constructor(private wishesService: WishesService, private formBuilder: FormBuilder) {
    }

    ngOnInit() {
        this.addWishForm = this.formBuilder.group({
            title: ['', Validators.required],
            description: [''],
            price: ['', Validators.required]
        });
    }

    addWish(): void {
        if (this.addWishForm.valid) {
            this.wishesService.addWish(this.addWishForm.value);

            this.addWishForm.reset();
        }
    }

}
