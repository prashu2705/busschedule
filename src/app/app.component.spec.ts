import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { BusService } from './services/bus.service';
import { of as observableOf } from 'rxjs';

describe('AppComponent', () => {
  let mockService = {
    getBusSchedule() { return observableOf(mockData) }
  }
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;
  let mockData = {
    "data":[
      {
        "organisation":"Sydney Buses",
        "date":"25/09/2015",
        "busData":[
          {
            "busId":"42612",
            "routeVariant":"891 2 1",
            "deviationFromTimetable":77
          },
          {
            "busId":"29016",
            "routeVariant":"400 1 1",
            "deviationFromTimetable":340
          },
          {
            "busId":"90467",
            "routeVariant":"393 1 1",
            "deviationFromTimetable":220
          },
          {
            "busId":"88836",
            "routeVariant":"M20 1 0",
            "deviationFromTimetable":-287
          }
        ]
      }
    ]
  }

  beforeEach(async(() => {
    spyOn(mockService, 'getBusSchedule').and.callThrough();
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        HttpClientModule
      ],
      providers: [{ provide: BusService, useValue: mockService }],
      declarations: [
        AppComponent
      ],
    }).compileComponents();
  }));

  describe('OnInit', () => {
    beforeEach(() => {
      fixture = TestBed.createComponent(AppComponent);
      component = fixture.debugElement.componentInstance;
      component.ngOnInit();
    });

    it('should create the app', () => {
      expect(component).toBeTruthy();
    });

    it('should invoke bus service', () => {
      expect(mockService.getBusSchedule).toHaveBeenCalled();
    });
  });

  describe('getStatus', () => {
    beforeEach(() => {
      fixture = TestBed.createComponent(AppComponent);
      component = fixture.debugElement.componentInstance;
    });
    it('should get status for each bus route', () => {
      spyOn(component, 'getStatus').and.callThrough();
      expect(component.getStatus(-1)).toBe('Early');
    });
    it('should get status for each bus route', () => {
      spyOn(component, 'getStatus').and.callThrough();
      expect(component.getStatus(0)).toBe('On Time');
    });
    it('should get status for each bus route', () => {
      spyOn(component, 'getStatus').and.callThrough();
      expect(component.getStatus(120)).toBe('On Time');
    });
    it('should get status for each bus route', () => {
      spyOn(component, 'getStatus').and.callThrough();
      expect(component.getStatus(300)).toBe('On Time');
    });
    it('should get status for each bus route', () => {
      spyOn(component, 'getStatus').and.callThrough();
      expect(component.getStatus(301)).toBe('Late');
    });
  });

  describe('getStatusColor', () => {
    beforeEach(() => {
      fixture = TestBed.createComponent(AppComponent);
      component = fixture.debugElement.componentInstance;
    });
    it('should get status for each bus route', () => {
      spyOn(component, 'getStatusColor').and.callThrough();
      expect(component.getStatusColor(-1)).toBe('red');
    });
    it('should get status for each bus route', () => {
      spyOn(component, 'getStatusColor').and.callThrough();
      expect(component.getStatusColor(0)).toBe('green');
    });
    it('should get status for each bus route', () => {
      spyOn(component, 'getStatusColor').and.callThrough();
      expect(component.getStatusColor(120)).toBe('green');
    });
    it('should get status for each bus route', () => {
      spyOn(component, 'getStatusColor').and.callThrough();
      expect(component.getStatusColor(300)).toBe('green');
    });
    it('should get status for each bus route', () => {
      spyOn(component, 'getStatusColor').and.callThrough();
      expect(component.getStatusColor(301)).toBe('blue');
    });
  });

});
