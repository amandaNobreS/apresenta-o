import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { PagesComponent } from './pages.component';
import { ComponentsModule } from '../components/components.module';

const routes: Routes = [
  {
    path: '',
    component: PagesComponent,
    children: [
      { path: '', redirectTo: 'request', pathMatch: 'full' },
      { path: 'request', data: { labelpt: 'Solicitação', labelen: 'Request' }, loadChildren: () => import('./request/request.module').then(module => module.RequestModule) },
    ]
  }
]


@NgModule({
  declarations: [
    PagesComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ComponentsModule
  ]
})
export class PagesModule { }
