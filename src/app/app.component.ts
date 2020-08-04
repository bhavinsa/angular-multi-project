import { Component, HostListener } from '@angular/core';
import { UtilService } from '@main-services/util.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-multi-project';

  constructor(protected utilService: UtilService){
    console.log(this.utilService.isDefined('Hi'));
  }
}
