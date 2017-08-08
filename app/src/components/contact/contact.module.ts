import { NgModule } from '@angular/core';
import { SharedModule } from '../_shared/shared.module';
import { ContactComponent } from './Contact.component';
import { FormInputTextModule } from '../_shared/form-input-text/form-input-text.module';

@NgModule({
    imports: [SharedModule, FormInputTextModule],
    declarations: [ContactComponent],
    exports: [ContactComponent]
})

export class ContactModule { }
