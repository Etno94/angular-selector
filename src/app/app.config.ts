import { ApplicationConfig, importProvidersFrom, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { ISupplyService } from '@app/models/ISupplyService.interface'; // Adjust the path as needed
import { InjectionToken } from '@angular/core';
import { provideHttpClient } from '@angular/common/http';
import { SupplyService } from '@app/services/supply.service'; // Real service to use when integrating with backend
import { MockSupplyService } from '@app/services/mockSupply.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// Injection Tokens
export const ISupplyServiceToken = new InjectionToken<ISupplyService>('ISupplyService');

export const appConfig: ApplicationConfig = {
  providers: [
    { provide: 
      ISupplyServiceToken, 
      useClass: MockSupplyService // Here we can swap between mock and real service for testing and development
    },
    provideRouter(routes),
    provideHttpClient(),
    importProvidersFrom(BrowserAnimationsModule)
  ]
};
