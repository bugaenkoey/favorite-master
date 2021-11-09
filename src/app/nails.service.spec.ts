import { TestBed } from '@angular/core/testing';

import { NailsService } from './nails.service';

describe('NailsService', () => {
  let service: NailsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NailsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
