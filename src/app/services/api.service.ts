import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CardResponse } from '../invest-comp/response.model.card';
import { Responseself } from '../models/response.model';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private apiUrl = 'https://msbit-exam-products-store.firebaseio.com/products.json';
  constructor(private http:HttpClient){}

   getProducts():Observable<Responseself[]>{
     return this.http.get<Responseself[]>(this.apiUrl);
   }
   getCard(url:string,header:{}):Observable<CardResponse[]>{
     return this.http.get<CardResponse[]>(url,header)
   }

}
