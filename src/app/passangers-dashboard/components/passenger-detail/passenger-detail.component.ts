import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { Passenger } from "../../models/Passenger.interface";

@Component({
  selector: "passenger-detail",
  templateUrl: "./passenger-detail.component.html",
  styleUrls: ["./passenger-detail.component.scss"]
})
export class PassengerDetailComponent implements OnInit {
  @Output() edit: EventEmitter<Passenger> = new EventEmitter<Passenger>();
  @Output() delete: EventEmitter<Passenger> = new EventEmitter<Passenger>();
  @Input() passenger: Passenger;
  editMode: boolean = false;
  constructor() {}
  editPasseger(event: KeyboardEvent): void {
    if (event.keyCode == 13) {
      this.passenger.fullname = (<HTMLInputElement>event.target).value;
      this.edit.emit(this.passenger);
    }
  }
  deletePassager(event: Event): void {
    this.delete.emit(this.passenger);
  }
  ngOnInit() {}
}
