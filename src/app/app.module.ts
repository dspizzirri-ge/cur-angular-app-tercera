import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TablaComponent } from './tabla/tabla.component';

import { FormsModule } from '@angular/forms';
import { DetalleComponent } from './detalle/detalle.component';
import { MayusculaPipe } from './mayuscula.pipe';

@NgModule({
  declarations: [
    AppComponent,
    TablaComponent,
    DetalleComponent,
    MayusculaPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
