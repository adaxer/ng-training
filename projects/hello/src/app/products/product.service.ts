import { Injectable } from '@angular/core';
import { IProduct } from './IProduct';
import { HttpClient } from '@angular/common/http';
import { Observable, of, pipe } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  apiBaseUrl = "http://localhost:5036/";

  getProduct(id: number): Observable<IProduct> {
    return this.http.get<IProduct>(`${this.apiBaseUrl}getproduct/${id}`);
    // .pipe(
    //   tap(_ => console.log(`fetched product id=${id}`)),
    //   catchError(this.handleError<IProduct>(`getProduct id=${id}`))
    // );;
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      console.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }


  getProducts(): Observable<IProduct[]> {
    return this.http.get<IProduct[]>(`${this.apiBaseUrl}getproducts`);
  }

  constructor(private http: HttpClient) { }
}
