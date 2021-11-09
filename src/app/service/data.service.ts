import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { Observable } from "rxjs";
import { INailServise } from "./INailServise";
import { NAILSERVICES } from "../mock-nailServices";

@Injectable({
    providedIn: 'root',
  })
  export class DataService{
   
  constructor(readonly client: HttpClient) {}

    linkNailServise ='https://jsonplaceholder.typicode.com/users';

    getNailServises(): Observable<INailServise[]> {
        return this.client.get<INailServise[]>(this.linkNailServise);
      }

      getAllService(){
          return NAILSERVICES;
      }
  }