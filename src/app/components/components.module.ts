import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppheaderComponent } from './appheader/appheader.component';
import { AppMenuComponent } from './app-menu/app-menu.component';


@NgModule({
  declarations: [
    AppheaderComponent,
    AppMenuComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule.withConfig({ callSetDisabledState: 'whenDisabledForLegacyCode' }),
  ],
  exports: [
    AppheaderComponent,
    AppMenuComponent
  ]
})

export class ComponentsModule { }