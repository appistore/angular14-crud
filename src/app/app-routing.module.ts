import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// code hidden for display purpose
 
const routes: Routes = [
  {
    path: '',
    redirectTo: 'fruits/home',
    pathMatch: 'full',
  },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
