import { Component, OnInit } from '@angular/core';
// import { UtilService } from '../../../../../src/app/service/util.service';
import { UtilService } from '@main-services/util.service';

@Component({
  selector: 'app-view1',
  templateUrl: './view1.component.html',
  styleUrls: ['./view1.component.css']
})
export class View1Component implements OnInit {

  constructor(protected utilService: UtilService) {
  }

  ngOnInit(): void {
    console.log(this.utilService.isDefined(null));

  }

}
