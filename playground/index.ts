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
<<<<<<< HEAD
  2017-11-10T12:00:00Z : <countdown-timer [end]="'2017-11-10T12:00:00Z'"></countdown-timer>
=======
    <countdown-timer [end]="'2017-12-10 01:00:00'"></countdown-timer>
    <countdown-timer [end]="'2018-01-01 01:00:00'"></countdown-timer>
    <countdown-timer [end]="'2018-03-01 01:00:00'"></countdown-timer>
    
    <countdown-timer [start]="'2017-11-09 01:00:00'"></countdown-timer>
    <countdown-timer [start]="'2017-10-30 01:00:00'"></countdown-timer>
    <countdown-timer [start]="'2017-10-20 01:00:00'"></countdown-timer>
>>>>>>> ebe551f32544d20e68a456f10cb8e243978b4491
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
