import { Component, OnInit } from "@angular/core";
import { Passenger } from "../../models/Passenger.interface";
import { PassengersService } from "../../services/passengers-service.service";
import { ActivatedRoute, Params } from "@angular/router";
import { switchMap } from "rxjs/operators";
@Component({
  selector: "passangers-viewer",
  templateUrl: "./passangers-viewer.component.html",
  styleUrls: ["./passangers-viewer.component.scss"]
})
export class PassangersViewerComponent implements OnInit {
  passenger: Passenger;
  constructor(
    private passangerService: PassengersService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.route.params
      .pipe(
        switchMap((params: Params) => {
          console.log(params);
          return this.passangerService.getPassenger(params.id);
        })
      )
      .subscribe((data: Passenger) => {
        this.passenger = data;
        console.log(this.passenger);
      });
  }

  handleUpdate(event: Passenger) {
    console.log(event);
  }
}
