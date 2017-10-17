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
    <countdown-timer [end]="'2017-12-10 01:00:00'"></countdown-timer>
    <countdown-timer [end]="'2017-10-30 01:00:00'"></countdown-timer>
    <countdown-timer [end]="'2017-10-20 01:00:00'"></countdown-timer>
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
