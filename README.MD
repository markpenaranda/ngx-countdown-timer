# ngx-countdown-timer

## Installation

To install this library, run:

```bash
$ npm install ngx-countdown-timer --save
```

## Consuming your library

Once you have published your library to npm, you can import your library in any Angular application by running:

```bash
$ npm install ngx-countdown-timer
```

and then from your Angular `AppModule`:

```typescript
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

// Import your library
import { CountdownTimerModule } from 'ngx-countdown-timer';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,

    // Specify your library as an import
    LibraryModule
    CountdownTimerModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
```

Once your library is imported, you can use its components, directives and pipes in your Angular application:

```xml
<!-- You can now use your library component in app.component.html -->
<h1>
  {{title}}
</h1>
Timer mode:
<countdown-timer [start]="'2017-01-01 00:00:00'"></countdown-timer>
 
Countdown:
<countdown-timer [end]="'2018-01-01 00:00:00'"></countdown-timer>

Countdown with zero trigger:
<countdown-timer (zeroTrigger)="yourOwnFunction()" [end]="'2018-01-01 00:00:00'"></countdown-timer>
```

## Development

To generate all `*.js`, `*.d.ts` and `*.metadata.json` files:

```bash
$ npm run build
```

To lint all `*.ts` files:

```bash
$ npm run lint
```

## License

MIT © [MJP](mailto:markangelpenaranda@gmail.com)
