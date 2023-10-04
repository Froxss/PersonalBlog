import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Product } from "../models/product.interface";
import { Injectable } from "@angular/core";
import { Paging } from "../models/paging.interface";
import { Category } from "../models/category.interface";
@Injectable({
    providedIn: 'root',
})
export class ProductService {
    constructor(private http: HttpClient) { }
    apiUrl = 'https://dummyjson.com/';
    getProducts(): Observable<Paging<Product>> {
        return this.http.get<Paging<Product>>(`${this.apiUrl}products`);
    }

    getProductById(id: number): Observable<Product> {
        return this.http.get<Product>(`${this.apiUrl}products/${id}`);
    }

    searchProducts(searchTxt: string): Observable<Paging<Product>> {
        return this.http.get<Paging<Product>>(`${this.apiUrl}products/search?q=${searchTxt}`)
    }
}