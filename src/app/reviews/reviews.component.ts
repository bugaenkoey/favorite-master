import { Component, OnInit } from '@angular/core';
import { DatasService } from '../datas.service';
import { IOrder } from '../service/IOrder';
import { ORDERS } from './mock-reviews';

@Component({
  selector: 'app-reviews',
  templateUrl: './reviews.component.html',
  styleUrls: ['./reviews.component.scss'],
})
export class ReviewsComponent implements OnInit {
  // public orders = ORDERS;

  constructor(public datasService: DatasService) {}

  ngOnInit(): void {
    this.getServises();
  }

  public orders: IOrder[] | undefined;

  getServises() {
    this.datasService.getOrders().subscribe(
      (data) => {
        console.log(data);
        this.orders = data;
      },
      (error) => {
        console.log('not server!' + error.message);
        alert(' Сервер не отвечает! ');
      }
    );
  }
}
