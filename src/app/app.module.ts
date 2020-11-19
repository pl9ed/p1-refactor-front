import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { FmPortalComponent } from './pages/fm-portal/fm-portal.component';
import { EPortalComponent } from './pages/e-portal/e-portal.component';
import { UploadComponent } from './upload/upload.component';
import { HttpClientModule } from '@angular/common/http'
import { FormsModule } from '@angular/forms';
import { ReimbfilterPipe } from './pipes/reimbfilter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FmPortalComponent,
    EPortalComponent,
    UploadComponent,
    ReimbfilterPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
