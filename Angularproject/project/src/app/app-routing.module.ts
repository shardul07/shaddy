import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateRoomComponent } from './create-room/create-room.component';
import { RoomdetailsComponent } from './roomdetails/roomdetails.component';

const routes: Routes = [
  {path:'room',component:RoomdetailsComponent},
  {path:'create',component:CreateRoomComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
