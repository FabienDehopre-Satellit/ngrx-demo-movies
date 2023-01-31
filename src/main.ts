import {bootstrapApplication} from "@angular/platform-browser";
import {AppComponent} from "./app/app.component";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { importProvidersFrom } from '@angular/core';
import {provideRouter} from "@angular/router";
import {APP_ROUTES} from "./app/app.routes";
import {provideHttpClient} from "@angular/common/http";

bootstrapApplication(AppComponent, {
  providers: [
    importProvidersFrom(BrowserAnimationsModule),
    provideRouter(APP_ROUTES),
    provideHttpClient()
  ]
}).catch((err) => console.error(err));
