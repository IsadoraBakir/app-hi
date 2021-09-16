import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TreeService {

  constructor() { }

  getContacts(): any {
    return fetch('assets/data.json');
  }
}
