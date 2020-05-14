import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { ReactiveFormsModule } from '@angular/forms';

import { ClientHistoryIndexComponent } from './pages/client-history-index/client-history-index.component';
import { ClientHistoryNewComponent } from './pages/client-history-new/client-history-new.component';
import { ClientHistoryViewComponent } from './pages/client-history-view/client-history-view.component';
import { ClientIndexComponent } from './pages/client-index/client-index.component';
import { ClientNewComponent } from './pages/client-new/client-new.component';
import { ClientViewComponent } from './pages/client-view/client-view.component';



@NgModule({
  declarations: [
    AppComponent,
    ClientHistoryIndexComponent,
    ClientHistoryNewComponent,
    ClientHistoryViewComponent,
    ClientIndexComponent,
    ClientNewComponent,
    ClientViewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
