import { Component } from '@angular/core';
import { HttpParams } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';

@Component({
  templateUrl: './list-evictions.component.html'
})
export class ListEvictionsComponent {
  constructor(public route: ActivatedRoute) {
  }
}
