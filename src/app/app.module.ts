import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { HttpClientModule } from "@angular/common/http";

import { AppComponent } from "./app.component";
import { SharedModule } from "./shared/shared.module";
import { VisitsModule } from "./visits/visits.module";
import { VisitForumComponent } from "./visits/visit-forum/visit-forum.component";

const routes: Routes = [
  { path: "", redirectTo: "/table", pathMatch: "full" },
  { path: "", loadChildren: "./visits/visits.module#VisitsModule" }
];

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(routes),
    VisitsModule,
    SharedModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [VisitForumComponent]
})
export class AppModule {}
