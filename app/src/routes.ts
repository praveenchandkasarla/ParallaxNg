import { RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { PortfolioComponent } from './components/portfolio/portfolio.component';
import { ContactComponent } from './components/contact/contact.component';
import { ErrorComponent } from './components/error/error.component';

export const routing = RouterModule.forRoot([
    {
        path: '',
        pathMatch: 'full',
        component: HomeComponent
    },
    {
        path: 'portfolio',
        component: PortfolioComponent
    },
    {
        path: 'contact',
        component: ContactComponent
    },
    {
        path: 'error',
        component: ErrorComponent
    },
    {
        path: '**',
        redirectTo: 'error'
    }
], { useHash: true });
