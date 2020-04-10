import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MaintenanceComponent } from './page/maintenance/maintenance.component';
import { NotFoundComponent } from './page/not-found/not-found.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { BottombarComponent } from './component/global/bottombar/bottombar.component';
import { PreviewComponent } from './page/preview/preview.component';

@NgModule({
  declarations: [
    AppComponent,
    MaintenanceComponent,
    NotFoundComponent,
    BottombarComponent,
    PreviewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
