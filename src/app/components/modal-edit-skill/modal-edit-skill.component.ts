import { Component, OnInit } from '@angular/core';
import { SwitchModalSkillService } from 'src/app/services/switch-modal-skill.service';

@Component({
  selector: 'app-modal-edit-skill',
  templateUrl: './modal-edit-skill.component.html',
  styleUrls: ['./modal-edit-skill.component.css']
})
export class ModalEditSkillComponent implements OnInit {

  constructor(private modalSS: SwitchModalSkillService) { }

  ngOnInit(): void {
  }

  closeModal(){

    this.modalSS.$modal.emit(false)

  }

}
