import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FilterResultsComponent } from './components/home/filter-results/filter-results.component';
import { HomeComponent } from './components/home/home.component';
import { PrimeFibonacciComponent } from './components/home/prime-fibonacci/prime-fibonacci.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'filter-results', component: FilterResultsComponent },
  { path: 'prime-fibonacci', component: PrimeFibonacciComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
