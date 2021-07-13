import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DetailsComponent } from './details/details.component';
import { HeroesComponent } from './heroes/heroes.component';


const routes: Routes = [
    { path: '', redirectTo: '/initial', pathMatch: 'full' },
    { path: 'heroes', component: HeroesComponent },
    { path: 'details', component: DetailsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
