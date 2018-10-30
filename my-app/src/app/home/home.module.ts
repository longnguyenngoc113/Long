import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout/layout.component';
import { Routes, RouterModule } from '@angular/router';
import { TrangChuComponent } from './trang-chu/trang-chu.component';

const homeRoutes:Routes = [
  {path: '', component:LayoutComponent, children : [
    {path: '', component:TrangChuComponent},
    {path: 'trangchu',component:TrangChuComponent},
  ]},
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(homeRoutes),
  ],
  declarations: [LayoutComponent, TrangChuComponent],
  exports : [LayoutComponent,TrangChuComponent],
})
export class HomeModule { }
