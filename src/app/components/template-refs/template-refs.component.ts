import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-template-refs",
  templateUrl: "./template-refs.component.html",
  styleUrls: ["./template-refs.component.scss"]
})
export class TemplateRefsComponent implements OnInit {
  constructor() {}

  ngOnInit() {}

  getValue(value: string): void {
    console.log(value);
  }
}
