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

  getTimeDiff( datetime ) {

      datetime = new Date( datetime ).getTime();
      var now = new Date().getTime();
  
      if( isNaN(datetime) )
      {
          return "";
      }
  
      console.log( datetime + " " + now);
  
      if (datetime < now) {
          var milisec_diff = now - datetime;
      }else{
          var milisec_diff = datetime - now;
      }
      var days = Math.floor(milisec_diff / 1000 / 60 / (60 * 24));
      var date_diff = new Date( milisec_diff );
  
      return days + "  "+ date_diff.getHours() + ":" + date_diff.getMinutes() + ":" + date_diff.getSeconds() + "";
  }
  
}
