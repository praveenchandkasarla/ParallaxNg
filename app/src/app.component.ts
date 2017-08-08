import { Component, } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    moduleId: module.id,
    selector: 'app',
    templateUrl: './app.component.html',
    styleUrls: ['../styles/components/app.css']
})

export class AppComponent {
    isUserAuthorized: boolean = false;

    constructor(private _router: Router) {
    }

    contact() {
        this._router.navigateByUrl('/');
    }
}
