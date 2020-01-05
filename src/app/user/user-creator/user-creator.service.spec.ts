import { TestBed } from '@angular/core/testing';

import { UserCreatorService } from './user-creator.service';

describe('UserCreatorService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: UserCreatorService = TestBed.get(UserCreatorService);
    expect(service).toBeTruthy();
  });
});
