import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { HttpClientModule } from '@angular/common/http';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { StoreRouterConnectingModule } from '@ngrx/router-store';

import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import { HeaderComponent } from './header/header.component';
import { ProductComponent } from './product/product.component';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { CartComponent } from './cart/cart.component';
import * as fromApp from './store/app.reducer';
import { environment } from '../environments/environment';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    HeaderComponent,
    ProductComponent,
    CartComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    StoreModule.forRoot(fromApp.appReducer),
    StoreDevtoolsModule.instrument({ logOnly: environment.production }),
    StoreRouterConnectingModule.forRoot()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
