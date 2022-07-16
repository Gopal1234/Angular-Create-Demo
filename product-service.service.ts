import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Product } from '../model/product';
import { Observable, ObservableLike } from 'rxjs';
import { ProjectUrl } from '../project-url';
import { text } from '@angular/core/src/render3';

@Injectable({
  providedIn: 'root'
})
export class ProductServiceService {
  url:string=ProjectUrl.getUrl();
//put, get, post, delete
  constructor(private http:HttpClient) { }

  public addProduct(product:Product):Observable<any>
  {
return this.http.post(this.url+"add/product", product,{responseType:'text'});
  }
}
