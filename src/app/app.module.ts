import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { PassangersDashboardModule } from "./passangers-dashboard/passangers-dashboard.module";

import { TemplateRefsComponent } from "./components/template-refs/template-refs.component";
import { DataBindingComponent } from "./components/data-binding/data-binding.component";
import { RenderingFlowsComponent } from "./components/rendering-flows/rendering-flows.component";
import { AppComponent } from "./app.component";

@NgModule({
  declarations: [
    AppComponent,
    TemplateRefsComponent,
    DataBindingComponent,
    RenderingFlowsComponent
  ],
  bootstrap: [AppComponent],
  imports: [BrowserModule, CommonModule, FormsModule, PassangersDashboardModule]
})
export class AppModule {}
