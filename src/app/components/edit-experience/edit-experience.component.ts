import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Experience } from 'src/app/models/Experience';
import { ExperienceService } from 'src/app/services/experience.service';

@Component({
  selector: 'app-edit-experience',
  templateUrl: './edit-experience.component.html',
  styleUrls: ['./edit-experience.component.css']
})
export class EditExperienceComponent implements OnInit {

  //skill: Skill|any = null;
  listExperience: Experience | undefined;
  /*
  id:string=0;
  title:string="";
  yearBegin:string="";
  yearEnd:string="";
  school:string="";
  status="";
*/

  constructor(
    private expeService: ExperienceService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    const id = this.activatedRoute.snapshot.params['id'];
    this.expeService.getExperience(id).subscribe(
      (data) => {
        this.listExperience = data;
      });
      //this.router.navigate(['/']);
  }

  onUpdate(): void {
    const id = this.activatedRoute.snapshot.params['id'];
    this.expeService.updateExperience(id, this.listExperience!).subscribe(
      
    );
  }
  /*
  editEdu(education: Educa){
    this.id=education.id;
    this.title=education.title;
    this.yearBegin=education.yearBegin;
    this.yearEnd=education.yearEnd;
    this.school=education.school;
    this.status=education.status;
    this.educationService.updateEducation(this.id, education).subscribe((education)) => {});
    this.modalService.hide();
  }
  */
}
