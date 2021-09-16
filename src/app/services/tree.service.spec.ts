import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { TreeService } from './tree.service';
import { of } from 'rxjs';

describe('TreeService', () => {
  let service: TreeService;
  let httpMock: HttpTestingController;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule
      ],
      providers: [
        TreeService
      ]
    }).compileComponents();
    service = TestBed.inject(TreeService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
    service = null;
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should calls getContacts function', () => {
    const response = {
      1: {
        id: 'a853dddc-b639-41e6-a876-958b1e7f65d1',
        name: 'Harald Svante August',
        children: {}
      }
    };
    // tslint:disable-next-line: no-string-literal
    spyOn(service['httpClient'], 'get').and.returnValue(of(response));
    service.getContacts().subscribe(resp => {
      expect(resp).toBeDefined();
    });
  });
});
