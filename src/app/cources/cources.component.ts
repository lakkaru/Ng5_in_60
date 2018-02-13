import { Component, OnInit } from '@angular/core';
import {CourceService} from './cources.service';
import { AutoGrowDirective } from '../auto-grow.directive';


@Component({
  selector: 'app-cources',
  templateUrl: './cources.component.html',
  styleUrls: ['./cources.component.scss'],

  providers:[CourceService],
  // directives:[AutoGrowDirective],

})
export class CourcesComponent implements OnInit {
  title="The title of cources page";
  test="Test string";
  // cources=['Cource 1', 'Cource 2', 'Cource 3'];
  cources;
  constructor(courceService:CourceService) {
    this.cources=courceService.getCources();
  }

  ngOnInit() {
  }

}
