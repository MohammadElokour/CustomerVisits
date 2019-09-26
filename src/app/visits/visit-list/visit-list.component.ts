import { Component, OnInit } from "@angular/core";
import { MatDialog, MatDialogConfig } from "@angular/material";
import { VisitForumComponent } from "../visit-forum/visit-forum.component";
import { RowsData } from "../visits-data";

@Component({
  selector: "app-visit-list",
  templateUrl: "./visit-list.component.html",
  styleUrls: ["./visit-list.component.scss"]
})
export class VisitListComponent implements OnInit {
  constructor(private dialog: MatDialog) {}
  data = new RowsData();
  rows = this.data.rows;

  ngOnInit() {}

  onCreate() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.width = "30%";
    this.dialog.open(VisitForumComponent, dialogConfig);
  }
}
