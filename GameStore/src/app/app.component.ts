import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

import * as fromApp from './store/app.reducer';
import * as AppBootrapActions from './store/appBootrap.action';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  title = 'Ngrx App';
  constructor(private store: Store<fromApp.AppState>) { }

  ngOnInit() {
  }

}
