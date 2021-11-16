import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { GalleryComponent } from './gallery/gallery.component';
import { ReviewsComponent } from './reviews/reviews.component';
import { ContactsComponent } from './contacts/contacts.component';
import { EntranceComponent } from './entrance/entrance.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { NailServiceComponent } from './nail-service/nail-service.component';
import { DatasService } from './datas.service';
import {HttpClientModule} from '@angular/common/http';
import { AddOrderComponent } from './add-order/add-order.component';
import { AddUserComponent } from './add-user/add-user.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

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
    AddOrderComponent,
    AddUserComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [DatasService],
  bootstrap: [AppComponent]
})
export class AppModule { }
