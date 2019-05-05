import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Customer } from "./customer";
import { Observable } from 'rxjs';


@Injectable({
  providedIn: "root"
})
export class ApiService {
  apiURL: string = "https://localhost:44323";

  customers: Observable<Customer[]>;

  constructor(private httpClient: HttpClient) { }


  
  public getCustomers() {
    this.customers = this.httpClient.get<Customer[]>(`${this.apiURL}/api/customers`);
  }




  public createCustomer(customer: Customer) {
    return this.httpClient.post(`${this.apiURL}/api/customer`, customer);
  }

  public updateCustomer(customer: Customer) {
    return this.httpClient.put<Customer>(
      `${this.apiURL}/api/customers`,
      customer
    );
  }




  public getCustomerById(id: string) {
    return this.httpClient.get<Customer>(`${this.apiURL}/api/customer/${id}`);
  }
  public deleteCustomer(id: string) {
    return this.httpClient.delete<Customer>(
      `${this.apiURL}/api/customer/${id}`
    );
  }
}
