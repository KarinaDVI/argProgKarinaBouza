import { Component, OnInit } from '@angular/core';
//import { Educa } from 'src/app/models/Educa';
import { GetDataServiceService } from 'src/app/services/get-data-service.service';


@Component({
  selector: 'app-education-experience',
  templateUrl: './education-experience.component.html',
  styleUrls: ['./education-experience.component.css']
})
export class EducationExperienceComponent implements OnInit {

  constructor(private datosEduExpe:GetDataServiceService) { }
  
  educationList:any;
  //educa = new Educa("2008","#","EEMNº2 BR","finalizado");

  ngOnInit(): void {
    this.datosEduExpe.obtenerDatos().subscribe(data=>{
      console.log(data);
        this.educationList=data.education})
  }

}
