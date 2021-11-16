import { Component, OnInit } from '@angular/core';
import { DatasService } from '../datas.service';
import { GALLERY } from '../mock-nailServices';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit {

  constructor(public datasService: DatasService) { }

  ngOnInit(): void {
  }
public galery:string[] = GALLERY;

getGalery(){


}



}
