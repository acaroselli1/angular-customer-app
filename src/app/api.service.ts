import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Customer } from "./customer";

@Injectable({
  providedIn: "root"
})
export class ApiService {
  apiURL: string = "http://localhost:8080";


  constructor(private httpClient: HttpClient) {

  }

  public createCustomer(customer: Customer) {
    return this.httpClient.post(`${this.apiURL}/api/customer`, customer)
  }

  public updateCustomer(customer: Customer) {
    return this.httpClient.put(`${this.apiURL}/customers/${customer}`,customer)
  }

  public deleteCustomer(id: number) {
    return this.httpClient.delete(`${this.apiURL}/customers/${id}`)
  }

  public getCustomerById(id: string){
    return this.httpClient.get<Customer>(`${this.apiURL}/api/customer/${id}`)
  }

  public getCustomers() {
    return this.httpClient.get("/customers")
  }


  public getContacts(){
    return this.httpClient.get<Customer[]>(`${this.apiURL}/customers`);
}
}
