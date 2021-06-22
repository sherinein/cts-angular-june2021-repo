import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../common/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private httpClient:HttpClient) { }

  //baseUrl='http://newtech.us-east-1.elasticbeanstalk.com/productapi/';
  baseUrl='http://localhost:5000/v1/api/products';
  
  saveProduct(product:Product): Observable<Product[]>{
    console.log(product);
    const httpHeader:HttpHeaders=new HttpHeaders;
    httpHeader.append('Access-Control-Allow-Origin','*');
    return this.httpClient.post<Product[]>(this.baseUrl+'/save',product,{headers:httpHeader});
  }

  getAllProduct():Observable<Product[]>{
    return this.httpClient.get<Product[]>(this.baseUrl);
  }

}
