import { Component, OnInit } from '@angular/core';
import { DatasService } from '../datas.service';
import { INailServise as INailService } from '../service/INailServise';

@Component({
  selector: 'app-nail-service',
  templateUrl: './nail-service.component.html',
  styleUrls: ['./nail-service.component.scss'],
})
export class NailServiceComponent implements OnInit {
  constructor(public datasService: DatasService) {}

  ngOnInit(): void {
    this.getServises();
  }

  public nailservices: INailService[] | undefined;

  getServises() {
    this.datasService.getNailServises().subscribe((data) => {
      console.log(data);
      this.nailservices = data;
    });
  }

  
}
