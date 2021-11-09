import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { NAILSERVICES } from './mock-nailServices';
import { INailServise } from './service/INailServise';

@Injectable({
  providedIn: 'root'
})
export class DatasService {

  constructor(private client: HttpClient) { }

  getAll(){
    return NAILSERVICES;
  }
  public linkNailServise ='https://localhost:44354/service';

  getNailServises(): Observable<INailServise[]> {
      return this.client.get<INailServise[]>(this.linkNailServise);
    }
  
}
