import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
// import { Observable } from 'rxjs';
import { NAILSERVICES } from './mock-nailServices';
import { INailServise } from './service/INailServise';
import { IOrder } from './service/IOrder';

import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class DatasService {
  constructor(private client: HttpClient) {}

  // getAll() {
  //   return NAILSERVICES;
  // }
  public linkNailServise = 'https://localhost:44354/service';
  public linkOrder = 'https://localhost:44354/order';

  getNailServises(): Observable<INailServise[]> {
    //   const otvet:any = this.client.get<INailServise[]>(this.linkNailServise)
    //   .pipe(catchError(error=> {
    //     if(error.status ==0){console.log('eeeeeeeeeeeeeeeeeeeee')}else{
    //       console.log('rrrrrrrrrrrrrrrrrrrrr')
    //     };
    //     console.log(error.
    //       status); return throwError(console.error);
    //  }));

    // const otvet: any = this.client
    //   .get<INailServise[]>(this.linkNailServise)
    //   .pipe(
    //     catchError((error) => {
    //       if (error) {
    //         console.log('Сервер не отвечает!');
    //         alert(' Сервер не отвечает! '); 
    //         // return            
    //       } 
    //       return throwError(console.error);
    //     }));

    return this.client.get<INailServise[]>(this.linkNailServise);
 
  }

  getOrders(): Observable<IOrder[]> {
    return this.client.get<IOrder[]>(this.linkOrder);
  }
}
