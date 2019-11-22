import { TestBed } from '@angular/core/testing';

import { DblinkService } from './dblink.service';

describe('DblinkService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DblinkService = TestBed.get(DblinkService);
    expect(service).toBeTruthy();
  });
});
