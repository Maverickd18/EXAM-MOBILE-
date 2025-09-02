import { TestBed } from '@angular/core/testing';

import { Newsapi } from './newsapi';

describe('Newsapi', () => {
  let service: Newsapi;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Newsapi);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
