import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NgxDatatableComponent } from './ngx-datatable/ngx-datatable.component';


const routes: Routes = [
    { path: '', redirectTo: 'initial', pathMatch: 'full' },
    { path: 'ngx-datatable', component: NgxDatatableComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
