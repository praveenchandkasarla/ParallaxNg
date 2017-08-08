import { NgModule } from '@angular/core';
import { SharedModule } from '../_shared/shared.module';
import { PortfolioComponent } from './portfolio.component';
import { FormInputTextModule } from '../_shared/form-input-text/form-input-text.module';

@NgModule({
    imports: [SharedModule, FormInputTextModule],
    exports: [PortfolioComponent],
    declarations: [PortfolioComponent]
})

export class PortfolioModule { }
