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
  2017-11-10T12:00:00Z : <countdown-timer (zeroTrigger)="zeroFunction('nice')" [end]="'2017-11-10T12:00:00Z'"></countdown-timer>
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
