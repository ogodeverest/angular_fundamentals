import { Injectable } from "@angular/core";
import { Passenger } from "../models/Passenger.interface";
import { HttpClient, HttpResponse } from "@angular/common/http";
import { Observable, throwError } from "rxjs";
import { map, catchError } from "rxjs/operators";
const PASSANGERS_API = "http://localhost:3000/passangers";

@Injectable({
  providedIn: "root"
})
export class PassengersService {
  constructor(private http: HttpClient) {}

  getPassengers(): Observable<Passenger[]> {
    return this.http.get(PASSANGERS_API).pipe(
      map((response: Passenger[]) => {
        return <Passenger[]>response;
      }),
      catchError((err: Error) => {
        console.log(err);
        return throwError(err);
      })
    );
  }

  getPassenger(id) {
    return this.http.get(`${PASSANGERS_API}/${id}`).pipe(
      map((response: Passenger) => {
        return <Passenger>response;
      }),
      catchError((err: Error) => {
        console.log(err);
        return throwError(err);
      })
    );
  }

  editPassenger(passanger: Passenger): Observable<Passenger> {
    return this.http.put(`${PASSANGERS_API}/${passanger.id}`, passanger).pipe(
      map((response: Passenger) => {
        return response;
      }),
      catchError((err: Error) => {
        console.log(err);
        return throwError(err);
      })
    );
  }

  deletePassenger(passanger: Passenger): Observable<Passenger> {
    return this.http.delete(`${PASSANGERS_API}/${passanger.id}`).pipe(
      map((response: Passenger) => {
        return response;
      }),
      catchError((err: Error) => {
        console.log(err);
        return throwError(err);
      })
    );
  }
}
