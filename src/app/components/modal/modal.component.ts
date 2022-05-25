import { Component, OnInit } from '@angular/core';

import {NGbModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {

  constructor(private modal:NGbModal) { }

  ngOnInit(): void {
  }

}
