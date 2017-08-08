import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    moduleId: module.id,
    selector: 'home',
    templateUrl: './home.component.html',
    styleUrls: ['../../../styles/components/home.css']
})

export class HomeComponent {
    constructor(private _router: Router) {
            this._router.navigate(['/']);
    }
}
