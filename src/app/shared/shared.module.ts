import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { FormsModule } from "@angular/forms";

import { CommonModule } from "@angular/common";
import { MaterialModule } from "../material.module";
import { NavbarComponent } from "./navbar/navbar.component";

@NgModule({
  declarations: [NavbarComponent],
  imports: [CommonModule, RouterModule, FormsModule, MaterialModule],
  exports: [
    CommonModule,
    NavbarComponent,
    RouterModule,
    FormsModule,
    MaterialModule
  ]
})
export class SharedModule {}
