import { NgModule } from '@angular/core';
import { LoginComponent } from './components/auth/login.component';
import { Routes, RouterModule } from '@angular/router';
import { RegistroComponent } from './components/auth/registro.component';
import { HomeComponent } from './components/home/home.component';
//import { PortfolioComponent } from './components/portfolio/portfolio.component';

const routes: Routes = [

  //{path:'portfolio',component:PortfolioComponent},// canActivate:[GuardGuard]},
  {path:'',component: HomeComponent},
  {path:'login',component: LoginComponent},
  //{path:'experienceEdit/:id',component: EditSkillComponent},
  {path: 'registro',component: RegistroComponent},
  //{path:'',redirectTo:'home',pathMatch:'full'},
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
