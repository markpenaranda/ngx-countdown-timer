import { Component, Input, OnInit, OnDestroy, ElementRef } from '@angular/core';

@Component({
  selector: 'countdown-timer',
  template: `{{ displaytime }}`
})
export class CountdownTimer implements OnInit, OnDestroy{
 
  @Input() start;
  @Input() end;
  timer: any;
  displayTime: any;
  constructor(
    private el: ElementRef
  ) {
  }

  ngOnInit(): void {
    this.timer = setInterval(() => {
        if (this.start) {
            this.displayTime = this.getTimeDiff(this.start, true);
        } else {
            this.displayTime = this.getTimeDiff(this.end);
        }
      }, 1000);
  }

  ngOnDestroy() {
    this.stopTimer();
  }

  private getTimeDiff( datetime, useAsTimer = false ) {
      datetime = new Date( datetime ).getTime();
      var now = new Date().getTime();
  
      if( isNaN(datetime) )
      {
          return "";
      }

      var milisec_diff = datetime - now;
      if (useAsTimer) {
          milisec_diff = now - datetime;
      }
      var days = Math.floor(milisec_diff / 1000 / 60 / (60 * 24));
      var date_diff = new Date( milisec_diff );
      var day_string = (days) ? this.twoDigit(days) + ":" : "";

      // Date() takes a UTC timestamp – getHours() gets hours in local time not in UTC. therefore we have to use getUTCHours()
      return day_string + this.twoDigit(date_diff.getUTCHours()) +
         ":" + this.twoDigit(date_diff.getMinutes()) + ":" 
         + this.twoDigit(date_diff.getSeconds());
  }


  private twoDigit(number: number) {
      return number > 9 ? "" + number: "0" + number;
  }

  private stopTimer() {
    clearInterval(this.timer);
    this.timer = undefined;
  }
  
}
