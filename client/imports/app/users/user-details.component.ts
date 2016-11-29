import {Component, OnInit, OnDestroy} from '@angular/core';
import template from './user-details.component.html';
import {ActivatedRoute} from "@angular/router";
import {Subscription} from 'rxjs/Subscription';
import {User} from "../../../../both/models/user.model";

@Component({
    selector: 'user-details',
    template
})
export class UserDetailsComponent implements OnInit, OnDestroy {
    userId: string;
    params: Subscription;
    user: User;

    constructor(private route: ActivatedRoute) {
    }

    ngOnInit() {
        this.params = this.route.params.map(params => params['userId'])
            .subscribe(userId => {
                this.userId = userId
            });
    }

    ngOnDestroy() {
        this.params.unsubscribe();
    }

}
