import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PrescFormComponent } from './presc-form/presc-form.component';
import { HttpClientModule } from '@angular/common/http';
import { PrescriptionModalComponent } from './presc-form/prescription-modal.component';

@NgModule({
  declarations: [
    AppComponent,
    PrescFormComponent,
    PrescriptionModalComponent
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
