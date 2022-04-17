import { Component, OnInit } from '@angular/core';
import { GetDataServiceService } from 'src/app/services/get-data-service.service';
import { EducationExperienceComponent } from '../education-experience/education-experience.component';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent implements OnInit {

  constructor(private datosExpe:GetDataServiceService) { }

    experienceList:any;

  ngOnInit(): void {
    this.datosExpe.obtenerDatos().subscribe(data=>{
      console.log(data);
      this.experienceList=data.experience});
    }
  }


