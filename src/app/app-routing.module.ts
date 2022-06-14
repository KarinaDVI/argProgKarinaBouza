import { NgModule } from '@angular/core';
import { LoginComponent } from './components/login/login.component';
import { Routes, RouterModule } from '@angular/router';
//import { PortfolioComponent } from './components/portfolio/portfolio.component';

const routes: Routes = [

  //{path:'portfolio',component:PortfolioComponent},// canActivate:[GuardGuard]},
  
  {path:'login',component: LoginComponent},
  //{path:'experienceEdit/:id',component: EditSkillComponent},
  {path:'',redirectTo:'home',pathMatch:'full'},
  //{path: '', redirectTo: '', pathMatch: 'full'},
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
//export const routingComponents=[NewAboutComponent,EditAboutComponent,NewSkillComponent]
