import { Injectable } from "@angular/core";
import { PassangerDashboardComponent } from "../containers/passanger-dashboard/passanger-dashboard.component";
import { Passenger } from "../models/Passenger.interface";

const PASSANGERS_API = "/";

@Injectable({
  providedIn: "root"
})
export class PassengersService {
  constructor() {}

  getPassengers(): Passenger[] {}
}
