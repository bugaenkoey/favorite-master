import { Component, OnInit } from '@angular/core';
// import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { DatasService } from '../datas.service';
import { NAILSERVICES } from '../mock-nailServices';
import { INailServise } from '../service/INailServise';

@Component({
  selector: 'app-add-order',
  templateUrl: './add-order.component.html',
  styleUrls: ['./add-order.component.scss'],
})
export class AddOrderComponent implements OnInit {
  constructor(public datasService: DatasService) {}
  nailservices!: INailServise[]; //  = NAILSERVICES;

  myForm!: FormGroup;
  days: number = 10;
  carent_date!: string;
  max_date!: string;

  ngOnInit(): void {
    this.nailservices = this.getServises();
    this.myForm = this.createFormGroup();

    this.betweenDates(this.days);
  }
  submit() {
    console.log(this.myForm);
    let formData = { ...this.myForm.value };
    console.log('formData', formData);
  }

  betweenDates(days: number) {
    // carent_date = 2021-11-16 + (days = 10) =>
    // this.max_data = 2021-11-26

    // this.carent_date = new Date().toISOString().split('T')[0];
    this.carent_date = this.dateYYYYMMDD(new Date(), '-');

    let date_max = new Date();
    date_max.setDate(new Date().getDate() + days);

    this.max_date = this.dateYYYYMMDD(date_max);

    console.log(this.carent_date, this.max_date);
  }

  dateYYYYMMDD(date: Date, split: string = '-'): string {
    let yyyy = date.getFullYear().toString();
    //january = 0 , december = 11
    let mm = (date.getMonth() + 1).toString();
    let dd = date.getDate().toString();

    return yyyy + split + mm + split + dd;
  }

  getServises(): INailServise[] {
    this.datasService.getNailServises().subscribe(
      (data) => {
        console.log(data);
        // this.nailservices = data;
        return data;
      },
      (error) => {
        console.log('Server not responding!' + error.message);
        alert(' Сервер не отвечает! ');
        // this.nailservices = NAILSERVICES;
      }
    );
    return NAILSERVICES;
  }

  createFormGroup(): FormGroup {
    return new FormGroup({
      surname: new FormControl('Zuzina', [
        Validators.required,
        Validators.minLength(3),
      ]),
      myname: new FormControl('Zina', [
        Validators.required,
        Validators.minLength(3),
      ]),
      tel: new FormControl('050123456', [Validators.required]),
      service: new FormControl('', Validators.required),
      note: new FormControl(''),
      date: new FormControl(),
    });
  }
}
