import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FormularioPageComponent } from './pages/formulario-page/formulario-page.component';
import { ErrorHelperComponent } from './shared/components/error-helper/error-helper.component';

@NgModule({
  declarations: [
    AppComponent,
    FormularioPageComponent,
    ErrorHelperComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
