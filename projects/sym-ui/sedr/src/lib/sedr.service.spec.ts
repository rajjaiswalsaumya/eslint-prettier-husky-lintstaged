import { TestBed } from '@angular/core/testing';

import { SedrService } from './sedr.service';

describe('SedrService', () => {
  let service: SedrService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SedrService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
