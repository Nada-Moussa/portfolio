import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { importProvidersFrom} from '@angular/core';
import { NgbModalModule } from '@ng-bootstrap/ng-bootstrap';

bootstrapApplication(AppComponent, {
  ...appConfig,
  providers: [
    ...(appConfig.providers || []),
    importProvidersFrom(NgbModalModule) // ✅ import modal module globally
  ]
}).catch(err => console.error(err));