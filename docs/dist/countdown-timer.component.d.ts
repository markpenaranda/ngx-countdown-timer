import { OnInit, OnDestroy } from '@angular/core';
export declare class CountdownTimer implements OnInit, OnDestroy {
    end: any;
    displayTime: string;
    timer: any;
    constructor();
    ngOnInit(): void;
    ngOnDestroy(): void;
    getTimeDiff(datetime: any): string;
}
