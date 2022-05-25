import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Educa } from 'src/app/models/Educa';
import { EducationService } from 'src/app/services/education.service';

@Component({
  selector: 'app-modal-edit-education',
  templateUrl: './modal-edit-education.component.html',
  styleUrls: ['./modal-edit-education.component.css']
})
export class ModalEditEducationComponent implements OnInit {

  //skill: Skill|any = null;
  listEducation: Educa | undefined;
  /*
  id:string=0;
  title:string="";
  yearBegin:string="";
  yearEnd:string="";
  school:string="";
  status="";
*/

  constructor(
    private educationService: EducationService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    const id = this.activatedRoute.snapshot.params['id'];
    this.educationService.getEducation(id).subscribe(
      (data) => {
        this.listEducation = data;
      });
      //this.router.navigate(['/']);
  }

  onUpdate(): void {
    const id = this.activatedRoute.snapshot.params['id'];
    this.educationService.updateEducation(id, this.listEducation!).subscribe(
      
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
