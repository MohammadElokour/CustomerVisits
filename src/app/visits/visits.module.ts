import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { SharedModule } from "../shared/shared.module";
import { VisitListComponent } from "./visit-list/visit-list.component";
import { VisitDetailComponent } from "./visit-detail/visit-detail.component";
import { VisitDashboardComponent } from "./visit-dashboard/visit-dashboard.component";
import { VisitForumComponent } from "./visit-forum/visit-forum.component";
import { VisitsService } from "./visits.service";

const routes: Routes = [
  { path: "table", component: VisitListComponent },
  { path: "table/:id", component: VisitDetailComponent },
  { path: "table/:id/dashboard", component: VisitDashboardComponent }
];

@NgModule({
  declarations: [
    VisitListComponent,
    VisitDetailComponent,
    VisitDashboardComponent,
    VisitForumComponent
  ],
  imports: [SharedModule, RouterModule.forChild(routes)],
  providers: [VisitsService]
})
export class VisitsModule {}
