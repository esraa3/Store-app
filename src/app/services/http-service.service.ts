import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';
import { Products } from '../../assets/Modules/Products';
@Injectable({
  providedIn: 'root'
})
export class HttpServiceService {

  constructor(private http :HttpClient) { }

  getProducts():Observable<Products[]>{
    return this.http.get<Products[]>('./assets/data.json');
  }
}
