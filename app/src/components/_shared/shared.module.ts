import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ng2Parallax } from '../../directives/ng2parallax';
import { FocusableDirective } from '../../directives/focusable.directive';
import { IsRouteActive } from '../../pipes/is-route-active.pipe';

@NgModule({
    imports: [CommonModule],
    declarations: [FocusableDirective, IsRouteActive, ng2Parallax],
    exports: [FocusableDirective, IsRouteActive, CommonModule, FormsModule, ReactiveFormsModule, RouterModule, ng2Parallax]
})

export class SharedModule { }
