import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { FormStateModel } from '../../models/form/form-state.model';
import { LoginRequestModel } from '../../models/auth/login-request.model';
import { fadeInAnimation } from '../../directives/fadeinAnimations';

@Component({
    moduleId: module.id,
    selector: 'portfolio',
    templateUrl: './portfolio.component.html',
    animations: [fadeInAnimation],
    host: { '[@fadeInAnimation]': '' }
})

export class PortfolioComponent {
    formState: FormStateModel;
    loginForm: FormGroup;

    private _loginRequest: LoginRequestModel;

    constructor(private _formBuilder: FormBuilder, private _router: Router) {
        this.formState = new FormStateModel();
        this.loginForm = this._formBuilder.group({
            'username': ['', Validators.required],
            'password': ['', Validators.required]
        });
        this.loginForm.valueChanges.subscribe(() => {
            this.formState.submitError = false;
        });
    }

    onLoginFormSubmit() {
        this._loginRequest = new LoginRequestModel();
        this._loginRequest.username = this.loginForm.value.username;
        this._loginRequest.password = this.loginForm.value.password;
        this.formState.submitting = true;
        this.formState.submitError = false;
    }
}
