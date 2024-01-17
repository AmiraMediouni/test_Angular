import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddPostComponent } from './add-post/add-post.component';
import { ListPostComponent } from './list-post/list-post.component';
import { NavbarComponent } from './navbar/navbar.component';
import { UpdatePostComponent } from './update-post/update-post.component';

const routes: Routes = [ { path:"" , component:ListPostComponent },
{ path:"list" , component:ListPostComponent },
{ path:"add" , component:AddPostComponent },
{ path:"update", component:UpdatePostComponent },
{ path:"navbar", component:NavbarComponent } ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
