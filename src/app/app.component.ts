import { Component, OnInit } from '@angular/core';
import { BusService } from './services/bus.service';
import { BusOrganisation } from './models/bus-organisation';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  private busData: BusOrganisation;
  private error: string;

  constructor(private busService: BusService) { }

  ngOnInit() {
    this.init();
  }

  getStatus(deviation: number) {
    if (deviation < 0) {
      return 'Early';
    } if (deviation <= 300) {
      return 'On Time';
    } else {
      return 'Late';
    }
  }

  getStatusColor(deviation: number) {
    return deviation < 0 ? 'red' : deviation >= 0 && deviation <= 300 ? 'green' : 'blue';
  }

  private init() {
    this.busService.getBusSchedule().subscribe(
      d => {
        this.busData = d;
      }, err => {
        this.error = 'There has been a problem while fetching bus report. Please try again later.';
      }
    );
  }
}
