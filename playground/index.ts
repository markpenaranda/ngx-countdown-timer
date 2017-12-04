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
    <h3>Timer With Zero Trigger Function </h3>
    <countdown-timer (zeroTrigger)="zeroFunction('nice')" [timeOnly]="true" [end]="'2017-12-10 19:52:00'"></countdown-timer><br>
    
    <h3>Simple Countdown Timer </h3>
    <countdown-timer [end]="'2018-01-01 01:00:00'"></countdown-timer>
    
    <h3>Simple Timer</h3>
    <countdown-timer [start]="'2017-11-09 01:00:00'"></countdown-timer>
 
    `
})
class AppComponent {
  zeroFunction (hello) {
    console.log(hello)
  }
}

@NgModule({
  bootstrap: [ AppComponent ],
  declarations: [ AppComponent ],
  imports: [ BrowserModule, CountdownTimerModule.forRoot() ]
})
class AppModule {}

platformBrowserDynamic().bootstrapModule(AppModule);
