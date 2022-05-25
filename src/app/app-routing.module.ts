import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditAboutComponent } from './components/edit-about/edit-about.component';
import { EditSkillComponent } from './components/edit-skill/edit-skill.component';
import { LoginComponent } from './components/login/login.component';
import { ModalEditEducationComponent } from './components/modal-edit-education/modal-edit-education.component';
import { NewAboutComponent } from './components/new-about/new-about.component';
import { NewEducationComponent } from './components/new-education/new-education.component';
import { NewSkillComponent } from './components/new-skill/new-skill.component';
import { ModalComponent } from './components/modal/modal.component';
//import { PortfolioComponent } from './components/portfolio/portfolio.component';



const routes: Routes = [

  //{path:'portfolio',component:PortfolioComponent},// canActivate:[GuardGuard]},
  
  {path:'login',component: LoginComponent},
  {path:'aboutNuevo',component: NewAboutComponent},
  {path:'aboutEdit/:id',component: EditAboutComponent},
  {path:'skillNuevo',component: NewSkillComponent},
  {path:'skillEdit/:id',component: EditSkillComponent},
  {path:'educationNuevo',component: NewEducationComponent},
  {path:'educationEdit/:id',component: ModalEditEducationComponent},
  {path:'modal',component: ModalComponent},
  //{path:'experienceEdit/:id',component: EditSkillComponent},
  //{path:'',redirectTo:'portfolio',pathMatch:'full'},
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
//export const routingComponents=[NewAboutComponent,EditAboutComponent,NewSkillComponent]
