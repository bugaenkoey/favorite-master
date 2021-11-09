import { Component, Injectable, OnInit } from '@angular/core';
import { DatasService } from '../datas.service';
import { NAILSERVICES } from '../mock-nailServices';
import { DataService } from '../service/data.service';
// import { DataService } from '../service/data.service';
import { INailServise as INailService } from '../service/INailServise';
import { NailService } from '../service/NailService';

@Component({
  selector: 'app-nail-service',
  templateUrl: './nail-service.component.html',
  // providers: [DataService],
  styleUrls: ['./nail-service.component.scss'],
  
})

export class NailServiceComponent implements OnInit {
  // readonly dataService: DataService 
  // public _dataService
  // constructor(dataService: DataService) { 
  //   this._dataService = dataService;
  // }
  constructor(public datasService:DatasService){}

    // this.nailservices = NAILSERVICES;
    // this.getServises();
  

  ngOnInit(): void {
    // this.nailservices = this.datasService.getAll();


    this.getServises();
    // this.nailservices = NAILSERVICES;
    // this.nailservices = this._dataService.getAllService();
  }

  public nailservices : INailService[] | undefined; 
  
  getServises() {
    this.datasService.getNailServises().subscribe((data) => {
      console.log(data);
      this.nailservices = data;
    });
  }
 
}
