import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { Passenger } from "../../models/Passenger.interface";

@Component({
  selector: "passenger-form",
  templateUrl: "./passenger-form.component.html",
  styleUrls: ["./passenger-form.component.scss"]
})
export class PassengerFormComponent implements OnInit {
  @Input() passenger: Passenger;
  @Output() update: EventEmitter<Partial<Passenger>> = new EventEmitter<
    Partial<Passenger>
  >();
  constructor() {}

  ngOnInit() {}

  handleChange(checked: boolean) {
    console.log(checked);
    if (checked) {
      this.passenger.checkInDate = +new Date();
    }
  }

  handleSubmit(passenger: Partial<Passenger>, isValid: boolean) {
    if (isValid) {
      console.log("Clicked");
      this.update.emit(passenger);
    }
  }
}
