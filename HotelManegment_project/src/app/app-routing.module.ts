import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AdminModule } from './admin/admin.module';
import { UserhomeComponent } from './userhome/userhome.component';

const routes: Routes = [ {path:'' , component:HomeComponent},
{path:'admin', loadChildren:()=>import('./admin/admin.module').then(m=>m.AdminModule)},
{path:'owner',loadChildren:()=>import('./owner/owner.module').then(m=>m.OwnerModule)},
{path:'user',component: UserhomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
