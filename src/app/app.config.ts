import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { MyService } from './service/my.service';
import { UserService } from './service/api/users/user.service';
import { HttpClientModule } from '@angular/common/http';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes),MyService,importProvidersFrom(HttpClientModule)]
};
