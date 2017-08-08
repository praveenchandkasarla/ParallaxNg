import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AUTH_PROVIDERS } from './common/auth.guard';
import { routing } from './routes';
import { SharedModule } from './components/_shared/shared.module';

import { AppComponent } from './app.component';
import { ErrorModule } from './components/error/error.module';
import { HomeModule } from './components/home/home.module';
import { PortfolioModule } from './components/portfolio/portfolio.module';
import { ContactModule } from './components/contact/contact.module';

@NgModule({
    imports: [
        BrowserModule,
        SharedModule,
        ErrorModule,
        HomeModule,
        PortfolioModule,
        ContactModule,
        routing
    ],
    declarations: [
        AppComponent
    ],
    providers: [
        AUTH_PROVIDERS
    ],
    exports: [PortfolioModule, ContactModule],
    bootstrap: [AppComponent]
})

export class AppModule { }
