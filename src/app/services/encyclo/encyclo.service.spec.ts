import { TestBed } from '@angular/core/testing';

import { EncycloService } from './encyclo.service';

describe('EncycloService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: EncycloService = TestBed.get(EncycloService);
    expect(service).toBeTruthy();
  });
});
