import { Component, OnInit } from "@angular/core";
import { ApiService } from "./api.service";
import { Customer } from "./customer";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit {
  constructor(private apiService: ApiService) {}

  customer: Customer = new Customer();

  customers: Customer[];

  name: string;
  occupation: string;
  isGetCustomerListButtonClicked: boolean;

  getCustomers() {
    this.isGetCustomerListButtonClicked = true;
    this.apiService.getCustomers().subscribe(data => (this.customers = data));
  }

  getCustomerById(id: string) {
    this.apiService.getCustomerById(id).subscribe(data => {
      this.name = data.name;
      this.occupation = data.occupation;
      console.log(data);
      console.log(this.name);
      console.log(this.occupation);
    });
  }

  deleteCustomer(id: string) {
    this.apiService.deleteCustomer(id).subscribe(data => {
      this.getCustomers();
      console.log("Customer deleted!");
    });
  }

  postCustomer(customer: Customer) {
    this.apiService.createCustomer(customer).subscribe(data => {
      this.getCustomers();
      console.log(data);
      console.log("Posted new customer!");
    });
  }

  ngOnInit() {}
}
