import { Component, Input, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'countdown-timer',
  template: `<span>{{ displayTime }}</span>`
})
export class CountdownTimer implements OnInit, OnDestroy{
 
  @Input() end;
  displayTime: string;
  timer: any;

  constructor() {
  }

  ngOnInit(): void {
    this.timer = setInterval(() => { 
        this.displayTime = this.getTimeDiff(this.end) 
      }, 1000);
  }

  ngOnDestroy() {
    clearInterval(this.timer);
  }

  private getTimeDiff( datetime ) {
      datetime = new Date( datetime ).getTime();
      var now = new Date().getTime();
  
      if( isNaN(datetime) )
      {
          return "";
      }

      var milisec_diff = datetime - now;
      var days = Math.floor(milisec_diff / 1000 / 60 / (60 * 24));
      var date_diff = new Date( milisec_diff );
      var day_string = (days) ? this.twoDigit(days) + ":" : "";
      
      return day_string + this.twoDigit(date_diff.getHours()) +
         ":" + this.twoDigit(date_diff.getMinutes()) + ":" 
         + this.twoDigit(date_diff.getSeconds());
  }

  private twoDigit(number: number) {
      return number > 9 ? "" + number: "0" + number;
  }
  
}
