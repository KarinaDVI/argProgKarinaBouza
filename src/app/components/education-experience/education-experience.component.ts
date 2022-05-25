import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Educa } from 'src/app/models/Educa';
import { EducationService } from 'src/app/services/education.service';
//import { Educa } from 'src/app/models/Educa';
import { GetDataServiceService } from 'src/app/services/get-data-service.service';


@Component({
  selector: 'app-education-experience',
  templateUrl: './education-experience.component.html',
  styleUrls: ['./education-experience.component.css']
})
export class EducationExperienceComponent implements OnInit {

listEducation:Educa[]=[];
  
  constructor(private datosEduExpe:GetDataServiceService,
              private educationService:EducationService,
              private activatedRoute: ActivatedRoute,
              private router: Router
              ) { }
  
  
  //educationList:any;
  //educa = new Educa("2008","#","EEMNº2 BR","finalizado");

  ngOnInit(): void {
    this.cargarEducation();

  }

  cargarEducation():void{
    this.educationService.getAllEducation().subscribe((data:any[])=>{
      console.log(data);
      this.listEducation=data;
    })
    }
    borrarEducationDeLista(educationParaBorrar: Educa): void{
      this.listEducation= this.listEducation.filter(p => p.id !== educationParaBorrar.id)
      this.educationService.deleteEducation(this.listEducation, educationParaBorrar).subscribe();
    }

}
