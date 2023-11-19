import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AdminModule } from './admin/admin.module';


const routes: Routes = [ {path:'' , component:HomeComponent},
{path:'admin', loadChildren:()=>import('./admin/admin.module').then(m=>m.AdminModule)},
{path:'owner',loadChildren:()=>import('./owner/owner.module').then(m=>m.OwnerModule)},
{path:'user',loadChildren:()=>import('./userhome/userhome.module').then(m=>m.UserhomeModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
