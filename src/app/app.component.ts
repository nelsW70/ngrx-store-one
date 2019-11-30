import { AppState } from './app-state';
import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ngrx-store-one';
  counter$: Observable<number>;

  constructor(private store: Store<AppState>) {
    this.counter$ = store.select('counter');
  }
}
