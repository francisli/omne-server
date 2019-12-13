import { Injectable } from '@angular/core';

import { ApiService } from './api.service';

@Injectable()
export class UserService {
  private user: any = null;

  constructor(private api: ApiService) {
    this.refresh();
  }

  refresh() {
    this.api.users.me().subscribe(response => this.user = response.body);
  }

  get id() {
    if (this.user) {
      return this.user.id;
    }
    return null;
  }

  get isAdmin() {
    if (this.user) {
      return this.user.isAdmin;
    }
    return false;
  }
}
