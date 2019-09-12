import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { PassangersDashboardModule } from "./passangers-dashboard/passangers-dashboard.module";
import { RouterModule } from "@angular/router";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HomeComponent } from "./home/home.component";
import { NotFoundComponent } from "./not-found/not-found.component";

@NgModule({
  declarations: [AppComponent, HomeComponent, NotFoundComponent],
  bootstrap: [AppComponent],
  imports: [
    BrowserModule,
    RouterModule,
    CommonModule,
    FormsModule,
    PassangersDashboardModule,
    AppRoutingModule
  ]
})
export class AppModule {}
