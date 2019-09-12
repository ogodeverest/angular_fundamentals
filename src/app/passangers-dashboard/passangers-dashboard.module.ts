import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { FormsModule } from "@angular/forms";
import { RouterModule, Routes } from "@angular/router";
import { PassangerDashboardComponent } from "./containers/passanger-dashboard/passanger-dashboard.component";
import { PassengerCountComponent } from "./components/passenger-count/passenger-count.component";
import { PassengerDetailComponent } from "./components/passenger-detail/passenger-detail.component";
import { PassangersViewerComponent } from "./containers/passangers-viewer/passangers-viewer.component";
import { PassengerFormComponent } from "./components/passenger-form/passenger-form.component";

const routes: Routes = [
  {
    path: "passengers",
    children: [
      {
        path: "",
        component: PassangerDashboardComponent
      },
      {
        path: ":id",
        component: PassangersViewerComponent
      }
    ]
  }
];
@NgModule({
  declarations: [
    PassangerDashboardComponent,
    PassengerCountComponent,
    PassengerDetailComponent,
    PassangersViewerComponent,
    PassengerFormComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forChild(routes)
  ]
})
export class PassangersDashboardModule {}
