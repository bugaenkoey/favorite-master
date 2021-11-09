import { Component, OnInit } from '@angular/core';
import { ORDERS } from './mock-reviews';

@Component({
  selector: 'app-reviews',
  templateUrl: './reviews.component.html',
  styleUrls: ['./reviews.component.scss']
})
export class ReviewsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  public orders = ORDERS;
}
