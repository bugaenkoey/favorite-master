import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { NAILSERVICES } from './mock-nailServices';
import { INailServise } from './service/INailServise';
import { IOrder } from './service/IOrder';

@Injectable({
  providedIn: 'root'
})
export class DatasService {

  constructor(private client: HttpClient) { }

  getAll(){
    return NAILSERVICES;
  }
  public linkNailServise ='https://localhost:44354/service';
  public linkOrder ='https://localhost:44354/order';


  getNailServises(): Observable<INailServise[]> {
      return this.client.get<INailServise[]>(this.linkNailServise);
    }
    getOrders(): Observable<IOrder[]> {
      return this.client.get<IOrder[]>(this.linkOrder);
    }
  
}
