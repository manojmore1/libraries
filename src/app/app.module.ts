import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DataTableCustComponent } from './data-table-cust/data-table-cust.component';
import { ReportingDataService } from './services/reporting-data.service';

import { HttpClientModule } from '@angular/common/http';
import { HighlighterDirective } from './directives/highlighter.directive';


@NgModule({
  declarations: [
    AppComponent,
    DataTableCustComponent,
    HighlighterDirective
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [ReportingDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
