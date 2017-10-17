import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CountdownTimer } from './countdown-timer.component';


export * from './countdown-timer.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    CountdownTimer,

  ],
  exports: [
    CountdownTimer
  ]
})
export class CountdownTimerModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: CountdownTimerModule
    };
  }
}
