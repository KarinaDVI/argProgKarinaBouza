import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BannerComponent } from './components/banner/banner.component';
import { LogoApComponent } from './components/logo-ap/logo-ap.component';
import { HeaderComponent } from './components/header/header.component';
import { AboutComponent } from './components/about/about.component';
import { ExperienceComponent } from './components/experience/experience.component';
import { EducationExperienceComponent } 
from './components/education-experience/education-experience.component';
import { SkillsComponent } from './components/skills/skills.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { HttpClient, HttpClientModule, HTTP_INTERCEPTORS } 
from '@angular/common/http';
import { GetDataServiceService } from './services/get-data-service.service';
import { NgCircleProgressModule } from 'ng-circle-progress';
import { FooterComponent } from './components/footer/footer.component';
import { LoginComponent } from './components/login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AutenticationService } from './services/autentication.service';
import { InterceptorService } from './services/interceptor.service';
import { EditAboutComponent } from './components/edit-about/edit-about.component';
import { NewAboutComponent } from './components/new-about/new-about.component';
import { NewSkillComponent } from './components/new-skill/new-skill.component';
import { EditSkillComponent } from './components/edit-skill/edit-skill.component';
import { ModalEditSkillComponent } from './components/modal-edit-skill/modal-edit-skill.component';
import { SwitchModalSkillService } from './services/switch-modal-skill.service';
import { ModalEditEducationComponent } from './components/modal-edit-education/modal-edit-education.component';
import { NewEducationComponent } from './components/new-education/new-education.component';
import { EditEducationComponent } from './components/edit-education/edit-education.component';
import { ModalComponent } from './components/modal/modal.component';
import { EditExperienceComponent } from './components/edit-experience/edit-experience.component';
import { NewExperienceComponent } from './components/new-experience/new-experience.component';
import { EditProjetcComponent } from './components/edit-projetc/edit-projetc.component';
import { NewProjectComponent } from './components/new-project/new-project.component';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BannerComponent,
    LogoApComponent,
    AboutComponent,
    ExperienceComponent,
    EducationExperienceComponent,
    SkillsComponent,
    ProjectsComponent,
    FooterComponent,
    LoginComponent,
    EditAboutComponent,
    NewAboutComponent,
    NewSkillComponent,
    EditSkillComponent,
    ModalEditSkillComponent,
    ModalEditEducationComponent,
    NewEducationComponent,
    EditEducationComponent,
    EditExperienceComponent,
    NewExperienceComponent,
    EditProjetcComponent,
    NewProjectComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    NgCircleProgressModule.forRoot({}),
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [GetDataServiceService, AutenticationService, 
  {provide: HTTP_INTERCEPTORS, useClass: InterceptorService, multi:true},
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
