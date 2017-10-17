import { Component, Input, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

var CountdownTimer = (function () {
    function CountdownTimer() {
    }
    /**
     * @return {?}
     */
    CountdownTimer.prototype.ngOnInit = function () {
        var _this = this;
        this.timer = setInterval(function () {
            _this.displayTime = _this.getTimeDiff(_this.end);
        }, 1000);
    };
    /**
     * @return {?}
     */
    CountdownTimer.prototype.ngOnDestroy = function () {
        clearInterval(this.timer);
    };
    /**
     * @param {?} datetime
     * @return {?}
     */
    CountdownTimer.prototype.getTimeDiff = function (datetime) {
        datetime = new Date(datetime).getTime();
        var /** @type {?} */ now = new Date().getTime();
        if (isNaN(datetime)) {
            return "";
        }
        console.log(datetime + " " + now);
        if (datetime < now) {
            var /** @type {?} */ milisec_diff = now - datetime;
        }
        else {
            var /** @type {?} */ milisec_diff = datetime - now;
        }
        var /** @type {?} */ days = Math.floor(milisec_diff / 1000 / 60 / (60 * 24));
        var /** @type {?} */ date_diff = new Date(milisec_diff);
        return days + "  " + date_diff.getHours() + ":" + date_diff.getMinutes() + ":" + date_diff.getSeconds() + "";
    };
    return CountdownTimer;
}());
CountdownTimer.decorators = [
    { type: Component, args: [{
                selector: 'countdown-timer',
                template: "<span>{{ displayTime }}</span>"
            },] },
];
/**
 * @nocollapse
 */
CountdownTimer.ctorParameters = function () { return []; };
CountdownTimer.propDecorators = {
    'end': [{ type: Input },],
};

var CountdownTimerModule = (function () {
    function CountdownTimerModule() {
    }
    /**
     * @return {?}
     */
    CountdownTimerModule.forRoot = function () {
        return {
            ngModule: CountdownTimerModule
        };
    };
    return CountdownTimerModule;
}());
CountdownTimerModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    CommonModule
                ],
                declarations: [
                    CountdownTimer,
                ],
                exports: [
                    CountdownTimer
                ]
            },] },
];
/**
 * @nocollapse
 */
CountdownTimerModule.ctorParameters = function () { return []; };

export { CountdownTimerModule, CountdownTimer };
