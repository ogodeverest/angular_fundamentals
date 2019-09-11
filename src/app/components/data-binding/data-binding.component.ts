import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-data-binding",
  templateUrl: "./data-binding.component.html",
  styleUrls: ["./data-binding.component.scss"]
})
export class DataBindingComponent implements OnInit {
  name: string = "Everest";
  title: string = "sadsa";
  numberOne: number = 1;
  numberTwo: number = 2;
  isHappy: boolean = true;
  constructor() {}
  handleChange(value: string): void {
    this.name = value;
  }

  handleClick(event: Event) {
    this.name = "????????";
  }

  ngOnInit() {}
}
