import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgxSpinnerModule } from 'ngx-spinner';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CepComponent } from './pages/cep/cep.component';
import { CepRountingModule } from './pages/cep/cep.routing';
import { CepService } from './pages/cep/cep.service';
import { CnpjComponent } from './pages/cnpj/cnpj.component';
import { CnpjRountingModule } from './pages/cnpj/cnpj.routing';
import { CnpjService } from './pages/cnpj/cnpj.service';
import { PrimengModule } from './primeng.module';
import { NgxViacepModule } from '@brunoc/ngx-viacep';
import { ToastrModule } from 'ngx-toastr';
import { MessageService } from 'primeng/api';

@NgModule({
  declarations: [
    AppComponent,
    CnpjComponent,
    CepComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot({
      positionClass: 'toast-bottom-center'
    }),
    NgxViacepModule,
    NgxSpinnerModule,
    CommonModule,
    AppRoutingModule,
    PrimengModule,
    HttpClientModule,
    FormsModule,
    CepRountingModule,
    CnpjRountingModule
  ],
  providers: [
    CepService,
    CnpjService,
    MessageService
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  bootstrap: [AppComponent]
})
export class AppModule { }
