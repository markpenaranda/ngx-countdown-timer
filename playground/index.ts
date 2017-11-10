/**
 * This is only for local test
 */
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Component } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { CountdownTimerModule }  from 'ngx-countdown-timer';

@Component({
  selector: 'app',
  template: `
  2017-11-10T12:00:00Z : <countdown-timer [end]="'2017-11-10T12:00:00Z'"></countdown-timer>
    `
})
class AppComponent {}

@NgModule({
  bootstrap: [ AppComponent ],
  declarations: [ AppComponent ],
  imports: [ BrowserModule, CountdownTimerModule.forRoot() ]
})
class AppModule {}

platformBrowserDynamic().bootstrapModule(AppModule);
