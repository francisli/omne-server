import { Component } from '@angular/core';
import { HttpParams } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';

@Component({
  templateUrl: './list-buyouts.component.html'
})
export class ListBuyoutsComponent {
  constructor(public route: ActivatedRoute) {
  }
}
