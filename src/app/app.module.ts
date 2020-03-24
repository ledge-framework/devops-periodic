import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PeriodicTableComponent } from './periodic-table/periodic-table.component';
import {AppPhaseComponent} from './app-phase/app-phase.component';
import {AppWikiComponent} from './app-wiki/app-wiki.component';
import {AtomComponent} from './atom/atom.component';
import {AtomDetailsComponent} from './atom-details/atom-details.component';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    PeriodicTableComponent,
    AppPhaseComponent,
    AppWikiComponent,
    AtomComponent,
    AtomDetailsComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
