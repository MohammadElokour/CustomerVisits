import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable()
export class VisitsService {
  private data;

  constructor(private http: HttpClient) {
    console.log(this.data);
  }

  getData() {
    this.http.get("http://localhost:3000/api/data").subscribe(visitsData => {
      this.data = visitsData;
    });
  }
}
