import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, PreloadAllModules } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AgmCoreModule } from '@agm/core';
import { StoreModule } from '@ngrx/store';
import {
  MatButtonModule,
  MatCheckboxModule, MatDialogModule, MatIconModule, MatInputModule, MatListModule, MatToolbarModule
} from '@angular/material';

/*
 * Platform and Environment providers/directives/pipes
 */
import { environment } from 'environments/environment';
import { ROUTES } from './app.routes';
// App is our top level component
import { AppComponent } from './app.component';
import { APP_RESOLVER_PROVIDERS } from './app.resolver';
import { AppState, InternalStateType } from './app.service';
import { HomeComponent } from './home';
import { AboutComponent } from './about';
import { NoContentComponent } from './no-content';
import { XLargeDirective } from './home/x-large';
import { DevModuleModule } from './+dev-module';

import '../styles/styles.scss';
import '../styles/headings.css';
import '../styles/purple-green.css';
import { MapComponent } from './map/map.component';
import { StoreService } from './service/store.service';
import { selectedItemsReducer, storeReducer, storeSelectReducer } from './reducer/store.reducer';
import { StorelistComponent } from './storelist/storelist.component';
import { StoreDetailComponent } from './storedetail/storedetail.component';
import { TopbarComponent } from './topbar/topbar.component';
import { ReportModalComponent } from './reportmodal/reportmodal.component';

// Application wide providers
const APP_PROVIDERS = [
  ...APP_RESOLVER_PROVIDERS,
  AppState
];

interface StoreType {
  state: InternalStateType;
  restoreInputValues: () => void;
  disposeOldHosts: () => void;
}

/**
 * `AppModule` is the main entry point into Angular2's bootstraping process
 */
@NgModule({
  bootstrap: [ AppComponent ],
  declarations: [
    AppComponent,
    AboutComponent,
    HomeComponent,
    NoContentComponent,
    XLargeDirective,
    MapComponent,
    StorelistComponent,
    StoreDetailComponent,
    TopbarComponent,
    ReportModalComponent
  ],
  /**
   * Import Angular's modules.
   */
  imports: [
    StoreModule.forRoot({
      store: storeReducer,
      selectedStore: storeSelectReducer,
      selectedItems: selectedItemsReducer
    }),
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(ROUTES, {
      useHash: Boolean(history.pushState) === false,
      preloadingStrategy: PreloadAllModules
    }),
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyBPvCpz5EBmx1uDxlVPpVfbqGHqr6Z0v74'
    }),
    MatButtonModule,
    MatCheckboxModule,
    MatListModule,
    MatToolbarModule,
    MatInputModule,
    MatIconModule,
    MatDialogModule,
    MatCheckboxModule,

    /**
     * This section will import the `DevModuleModule` only in certain build types.
     * When the module is not imported it will get tree shaked.
     * This is a simple example, a big app should probably implement some logic
     */
    ...environment.showDevModule ? [ DevModuleModule ] : [],
  ],
  /**
   * Expose our Services and Providers into Angular's dependency injection.
   */
  providers: [
    environment.ENV_PROVIDERS,
    APP_PROVIDERS,
    StoreService
  ],
  entryComponents: [ReportModalComponent]
})
export class AppModule {}
