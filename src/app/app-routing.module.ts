import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { GalleryComponent } from './gallery/gallery.component';
import { ReviewsComponent } from './reviews/reviews.component';
import { ContactsComponent } from './contacts/contacts.component';
import { EntranceComponent } from './entrance/entrance.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { NailServiceComponent } from './nail-service/nail-service.component';
import { AddOrderComponent } from './add-order/add-order.component';
import { AddUserComponent } from './add-user/add-user.component';


const routes: Routes = [
  { path: '', component: AppComponent, pathMatch: 'full' },
  { path: 'add-order',component: AddOrderComponent},
  { path: 'add-user',component: AddUserComponent},
  { path: 'gallery', component: GalleryComponent },
  { path: 'reviews', component: ReviewsComponent },
  { path: 'services', component: NailServiceComponent },
  { path: 'contacts', component: ContactsComponent },
  { path: 'entrance', component: EntranceComponent },
  { path: '**', component: NotFoundComponent },
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
