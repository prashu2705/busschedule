import { TestBed, inject } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { HttpClientModule } from '@angular/common/http';

import { BusService } from './bus.service';

describe('BusService', () => {
  let mockBackend: HttpTestingController;
  let service: BusService;

  beforeEach(() => TestBed.configureTestingModule({
    imports: [HttpClientModule, HttpClientTestingModule],
  }));

  beforeEach(inject([BusService, HttpTestingController], (_busService: BusService, _mockBackend: HttpTestingController) => {
    mockBackend = _mockBackend;
    service = _busService;
  }));

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
