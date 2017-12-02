import { Component, Input, OnInit, OnDestroy, ElementRef, Output } from '@angular/core';
import { EventEmitter } from '@angular/core/src/event_emitter';

@Component({
  selector: 'countdown-timer',
  template: `{{ displaytime }}`
})
export class CountdownTimer implements OnInit, OnDestroy{
 
  @Input() end;
  @Output() zeroTrigger;
  timer: any;
  displaytime: any;
  constructor(
    private el: ElementRef
  ) {
    this.zeroTrigger = new EventEmitter(true);
  }

  ngOnInit(): void {
    this.stopTimer();
    this.timer = setInterval(() => { 
        this.displaytime = this.getTimeDiff(this.end);
        this.zeroTrigger.emit();
      }, 1000);
  }

  ngOnDestroy() {
    this.stopTimer();
  }

  private getTimeDiff( datetime ) {

      let now = new Date().getTime();
      let endDateString = new Date( datetime ).toUTCString();
      let end = new Date(endDateString).getTime();
      if( isNaN(end) )
      {
          return "";
      }

     
      let diffInMs: number = end - now;
      var days = Math.floor(diffInMs / 1000 / 60 / (60 * 24));
      var date_diff = new Date( diffInMs );
      var day_string = (days) ? this.twoDigit(days) + ":" : "";
      
      
      return day_string + this.twoDigit(date_diff.getUTCHours()) +
         ":" + this.twoDigit(date_diff.getUTCMinutes()) + ":" 
         + this.twoDigit(date_diff.getUTCSeconds());

  }


  private twoDigit(number: number) {
      return number > 9 ? "" + number: "0" + number;
  }

  private stopTimer() {
    clearInterval(this.timer);
    this.timer = undefined;
  }
  
}
