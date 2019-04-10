import { Component, OnInit } from "@angular/core";
import { ApiService } from "./api.service";
import { Customer } from "./customer";
import { Observable } from 'rxjs';
// import { UpdatedCustomer } from './updatedCustomer';

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit {
  constructor(private apiService: ApiService) { }

  customer: Customer = new Customer();

  updatedCustomer: Customer = new Customer();

  searchedCustomer: Customer = new Customer();

  occupation: string;

  isGetCustomerListButtonClicked: boolean;

  // getCustomers() {
  //   this.isGetCustomerListButtonClicked = true;
  //   this.apiService.getCustomers().subscribe(data => (this.customers = data));
  //   console.log("Got all customers!");
  // }


  // getCustomers() {
  //   this.isGetCustomerListButtonClicked = true;
  //   this.apiService.getCustomers().subscribe(data => (this.customers = data));
  //   console.log("Got all customers!");
  // }


  getCustomers() {
    this.apiService.getCustomers();
  }

  getCustomerById(id: string) {
    this.apiService.getCustomerById(id).subscribe(data => {
      console.log("Got customer by id!", data);
      this.searchedCustomer = data;
    });
  }

  deleteCustomer(id: string) {
    this.apiService.deleteCustomer(id).subscribe(data => {
      this.getCustomers();
      console.log("Customer deleted!", data);
    });
  }

  postCustomer(customer: Customer) {
    this.apiService.createCustomer(customer).subscribe(data => {
      this.getCustomers();
      console.log("Posted new customer!", data);
    });
  }

  updateCustomer(customer: Customer) {
    this.apiService.updateCustomer(customer).subscribe(data => {
      this.getCustomers();
      console.log("Customer updated!", data);
    });
  }

  ngOnInit() {
  }
}
