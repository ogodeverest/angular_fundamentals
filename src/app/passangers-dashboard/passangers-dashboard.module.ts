import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { PassangerDashboardComponent } from "./containers/passanger-dashboard/passanger-dashboard.component";
import { PassengerCountComponent } from "./components/passenger-count/passenger-count.component";
import { PassengerDetailComponent } from "./components/passenger-detail/passenger-detail.component";

@NgModule({
  declarations: [
    PassangerDashboardComponent,
    PassengerCountComponent,
    PassengerDetailComponent
  ],
  imports: [CommonModule],
  exports: [PassangerDashboardComponent]
})
export class PassangersDashboardModule {}
