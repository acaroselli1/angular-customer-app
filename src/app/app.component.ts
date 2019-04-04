import { Component, OnInit } from "@angular/core";
import { ApiService } from "./api.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit {
  constructor(private apiService: ApiService) {}

  name: string;
  occupation: string;


  getCustomerById(id: string) {
    this.apiService.getCustomerById(id).subscribe(data => {
      this.name = data.name;
      this.occupation = data.occupation;
    });
  }

  ngOnInit() {}
}
