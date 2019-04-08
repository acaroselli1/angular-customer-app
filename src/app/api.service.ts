import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Customer } from "./customer";
import { UpdatedCustomer } from './updatedCustomer';

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
  public getCustomerById(id: string){
    return this.httpClient.get<Customer>(`${this.apiURL}/api/customer/${id}`)
  }
  public deleteCustomer(id: string) {
    return this.httpClient.delete<Customer>(`${this.apiURL}/api/customer/${id}`)
  }

  public getCustomers(){
    return this.httpClient.get<any>(`${this.apiURL}/api/customers`)
  }
  
  public updateCustomer(customer: UpdatedCustomer) {
    return this.httpClient.put<UpdatedCustomer>(`${this.apiURL}/api/customers`,customer)
  }





  public getContacts(){
    return this.httpClient.get<Customer[]>(`${this.apiURL}/customers`);
}
}
