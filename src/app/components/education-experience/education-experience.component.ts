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
editEducaList: Educa | any;

title: string="";
starts: number=0;
ends: number=0;
school: string="";
status: string="";
urlimg: string="";

  
  constructor(private datosEduExpe:GetDataServiceService,
              private educationService:EducationService,
              private activatedRoute: ActivatedRoute,
              private router: Router
              ) { }
  

  ngOnInit(): void {
    this.cargarEducation();

  }

  cargarEducation():void{
    this.educationService.getAllEducation().subscribe((data:any[])=>{
      console.log(data);
      this.listEducation=data;
    })
    }

    getEducationEdit(education: Educa): void {
      //const id = this.activatedRoute.snapshot.params['id'];
      
      this.educationService.getEducation(education.id!).subscribe(
        (data) => {
          this.editEducaList = data;
        });
        
    }

    borrarEducationDeLista(educationParaBorrar: Educa): void{
      this.listEducation= this.listEducation.filter(p => p.id !== educationParaBorrar.id)
      this.educationService.deleteEducation(this.listEducation, educationParaBorrar).subscribe();
      window.location.reload();
    }

    onUpdate(): void {
      //const id = this.activatedRoute.snapshot.params['id'];
      const id = this.editEducaList.id
      this.educationService.updateEducation(id, this.editEducaList).subscribe(
      );
      window.location.reload();
    }

    onCreate(): void {
      const newEducation = new Educa(this.title, this.starts, this.ends, this.school,
        this.status, this.urlimg);
  
      this.educationService.saveEducation(newEducation).subscribe(
        data => {
          alert("Education creada");
          //this.router.navigate(['/']);
        }
      )
      window.location.reload();
    }

    modificarEducacion(educaId: number) {
      this.educationService.updateEducation(educaId, this.editEducaList).subscribe();
      window.location.reload();
    }

}
