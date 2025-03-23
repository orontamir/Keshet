import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import {BsDatepickerModule} from 'ngx-bootstrap/datepicker';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { InvoiceSearchComponent } from './invoice-search/invoice-search.component';
import { InvoiceListComponent } from './invoice-list/invoice-list.component';
import { InvoicePreviewComponent } from './invoice-preview/invoice-preview.component';
import { InvoiceDetailComponent } from './invoice-detail/invoice-detail.component';

const appRoutes: Routes = [
  { path: '', component: InvoiceSearchComponent },
  { path: 'invoice/:id', component: InvoiceDetailComponent },
  { path: '**', redirectTo: '' }
];
@NgModule({
  declarations: [
    AppComponent,
    InvoiceSearchComponent,
    InvoiceListComponent,
    InvoicePreviewComponent,
    InvoiceDetailComponent,
   
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    NoopAnimationsModule,
    RouterModule.forRoot(appRoutes),
    BsDatepickerModule.forRoot(),
    BrowserModule,
    HttpClientModule,
    FormsModule
  ],
  exports: [RouterModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
