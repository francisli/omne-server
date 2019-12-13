import { Component } from '@angular/core';
import { Location } from '@angular/common';

import { ApiService, NavigationService } from '../shared/services';

@Component({
  selector: 'app-home',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(private api: ApiService, private location: Location) {}

  ngAfterViewInit() {
  }
}
