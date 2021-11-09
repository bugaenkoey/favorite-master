import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
// import { RouterModule, Routes } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { GalleryComponent } from './gallery/gallery.component';
import { ReviewsComponent } from './reviews/reviews.component';
import { ContactsComponent } from './contacts/contacts.component';
import { EntranceComponent } from './entrance/entrance.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { NailServiceComponent } from './nail-service/nail-service.component';
import { NailService } from './service/NailService';
import { DataService } from './service/data.service';
import { DatasService } from './datas.service';
// import { OrderService } from './service/Order.Service';
// import { DataService } from './service/data.service';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    GalleryComponent,
    ReviewsComponent,
    NailServiceComponent,
    ContactsComponent,
    EntranceComponent,
    NotFoundComponent,
    // OrderService,
    // DataService,
    
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    // RouterModule.forRoot(appRoutes)
  ],
  providers: [DatasService],
  bootstrap: [AppComponent]
})
export class AppModule { }
