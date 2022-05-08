import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditAboutComponent } from './components/edit-about/edit-about.component';
import { LoginComponent } from './components/login/login.component';
import { NewAboutComponent } from './components/new-about/new-about.component';
import { PortfolioComponent } from './components/portfolio/portfolio.component';
import { GuardGuard } from './services/guard.guard';


const routes: Routes = [

  {path:'portfolio',component:PortfolioComponent},// canActivate:[GuardGuard]},
  {path:'login',component:LoginComponent},
  {path:'aboutnuevo',component:NewAboutComponent},
  {path:'aboutEdit',component:EditAboutComponent},
  {path:'',redirectTo:'portfolio',pathMatch:'full'},
  {path: '**', redirectTo: '', pathMatch: 'full'}
  //,
  //Original
  //{path:'',redirectTo:'login',pathMatch:'full'}//,
  //{path: 'editAbout',component:EditAboutComponent,canActivate:[GuardGuard]}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
