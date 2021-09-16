import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TreeService {

  public urlData = 'assets/data.json';

  constructor(private httpClient: HttpClient) { }

  getContacts(): Observable<any> {
    return this.httpClient.get(this.urlData).pipe(
      map(obj => obj)
    );
  }
}
