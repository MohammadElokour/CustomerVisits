import { Component, OnInit } from "@angular/core";
import { RowsData } from "../visits-data";
import { Router } from "@angular/router";

@Component({
  selector: "app-visit-detail",
  templateUrl: "./visit-detail.component.html",
  styleUrls: ["./visit-detail.component.scss"]
})
export class VisitDetailComponent implements OnInit {
  constructor(private router: Router) {}
  currentId = parseInt(this.router.url.slice(7));

  data = new RowsData();
  rows = this.data.rows;
  visits = this.rows[this.currentId - 1].visits;
  ngOnInit() {}
}
