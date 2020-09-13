import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { BusOrganisation } from '../models/bus-organisation';

@Injectable({
  providedIn: 'root'
})
export class BusService {
  constructor(private http: HttpClient) { }

  getBusSchedule(): Observable<BusOrganisation> {
    let busUrl = '../assets/bus-services-data.json';
    return this.http.get(busUrl).pipe(map((response: any) => {
      return response.data;
    }));
  }
}
