(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/common')) :
	typeof define === 'function' && define.amd ? define(['exports', '@angular/core', '@angular/common'], factory) :
	(factory((global['ngx-countdown-timer'] = {}),global.core,global.common));
}(this, (function (exports,core,common) { 'use strict';

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
    { type: core.Component, args: [{
                selector: 'countdown-timer',
                template: "<span>{{ displayTime }}</span>"
            },] },
];
/**
 * @nocollapse
 */
CountdownTimer.ctorParameters = function () { return []; };
CountdownTimer.propDecorators = {
    'end': [{ type: core.Input },],
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
    { type: core.NgModule, args: [{
                imports: [
                    common.CommonModule
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

exports.CountdownTimerModule = CountdownTimerModule;
exports.CountdownTimer = CountdownTimer;

Object.defineProperty(exports, '__esModule', { value: true });

})));
