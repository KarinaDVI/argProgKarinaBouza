import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BannerComponent } from './components/banner/banner.component';
import { LogoApComponent } from './components/logo-ap/logo-ap.component';
import { HeaderComponent } from './components/header/header.component';
import { AboutComponent } from './components/about/about.component';
import { ExperienceComponent } from './components/experience/experience.component';
import { EducationExperienceComponent } from './components/education-experience/education-experience.component';
import { SkillsComponent } from './components/skills/skills.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { ModalEducationExperienceComponent } from './components/modal-education-experience/modal-education-experience.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { GetDataServiceService } from './services/get-data-service.service';
import { NgCircleProgressModule } from 'ng-circle-progress';
import { FooterComponent } from './components/footer/footer.component';
import { LoginComponent } from './components/login/login.component';
import { PortfolioComponent } from './components/portfolio/portfolio.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AutenticationService } from './services/autentication.service';
import { InterceptorService } from './services/interceptor.service';
import { EditAboutComponent } from './components/edit-about/edit-about.component';
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
    ModalEducationExperienceComponent,
    FooterComponent,
    LoginComponent,
    PortfolioComponent,
    EditAboutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgCircleProgressModule.forRoot({}),
    ReactiveFormsModule
  ],
  providers: [GetDataServiceService, AutenticationService, 
  {provide: HTTP_INTERCEPTORS, useClass: InterceptorService, multi:true},
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
