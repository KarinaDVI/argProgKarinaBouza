import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Persona } from 'src/app/models/Persona';
import { GetDataServiceService } from 'src/app/services/get-data-service.service';

@Component({
  selector: 'app-edit-about',
  templateUrl: './edit-about.component.html',
  styleUrls: ['./edit-about.component.css']
})
export class EditAboutComponent implements OnInit {

  aboutMe:Persona|any=null;

  constructor(
    private aboutService: GetDataServiceService,
    private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.params['id'];
    this.aboutService.detailPersona(id).subscribe(
      data => {
        this.aboutMe = data;
      }
    )
  }

  onUpdate(): void {
    const id = this.activatedRoute.snapshot.params['id'];
    this.aboutService.updatePersona(id, this.aboutMe).subscribe(
      
    );
  }

}
