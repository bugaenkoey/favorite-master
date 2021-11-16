import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { DatasService } from '../datas.service';
import { NAILSERVICES } from '../mock-nailServices';
import { INailServise } from '../service/INailServise';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.scss'],
})
export class AddUserComponent implements OnInit {
//   constructor(public datasService: DatasService) {}
//   nailservices!: INailServise[]; //  = NAILSERVICES;
//   //  = NAILSERVICES;

//   myForm!: FormGroup;
//   countDay: number = 10;
//   c_date!: Date;
//   carent_date!: string;
//   date_max!: Date;
//   max_date!: string;

  ngOnInit(): void {
//     this.nailservices = this.getServises();
//     this.myForm = createFormGroup();

//     this.formatData();
  }
//   submit() {
//     console.log(this.myForm);
//     let formData = { ...this.myForm.value };
//     console.log('formData', formData);
//   }

//   formatData() {
//     // carent_date = 2021-11-16 + this.countDay =>
//     // this.max_data = 2021-11-26
//     this.carent_date = new Date().toISOString().split('T')[0];

//     this.date_max = new Date();
//     this.date_max.setDate(new Date().getDate() + this.countDay);

//     this.max_date = this.date_max.toISOString().split('T')[0];

//     console.log(this.carent_date, this.max_date);
//   }

//   getServises(): INailServise[] {
//     this.datasService.getNailServises().subscribe(
//       (data) => {
//         console.log(data);
//         // this.nailservices = data;
//         return data;
//       },
//       (error) => {
//         console.log('not server!' + error.message);
//         alert(' Сервер не отвечает! ');
//         // this.nailservices = NAILSERVICES;
//       }
//     );
//     return NAILSERVICES;
//   }
// }

// function createFormGroup(): FormGroup {
//   return new FormGroup({
//     surname: new FormControl('Zuzina', [
//       Validators.required,
//       Validators.minLength(3),
//     ]),
//     myname: new FormControl('Zina', [
//       Validators.required,
//       Validators.minLength(3),
//     ]),
//     tel: new FormControl('050123456', [Validators.required]),
//     service: new FormControl('', Validators.required),
//     note: new FormControl(''),
//     date: new FormControl(),
//   });
}
