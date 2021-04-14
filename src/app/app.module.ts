import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { FilterResultsComponent } from './components/home/filter-results/filter-results.component';
import { HomeComponent } from './components/home/home.component';
import { FilterSearchResultsPipe } from './shared/filter-search-results.pipe';
import { FilterResultsService } from './services/filter-results.service';
import { PrimeFibonacciComponent } from './components/home/prime-fibonacci/prime-fibonacci.component';
import { InputDigitOnlyDirective } from './shared/input-digit-only.directive';

@NgModule({
  declarations: [
    AppComponent,
    FilterResultsComponent,
    HomeComponent,
    FilterSearchResultsPipe,
    PrimeFibonacciComponent,
    InputDigitOnlyDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [FilterResultsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
