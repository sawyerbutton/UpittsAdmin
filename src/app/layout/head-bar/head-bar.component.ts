import { Component, OnInit } from '@angular/core';
import { levels} from './level';

@Component({
  selector: 'app-head-bar',
  templateUrl: './head-bar.component.html',
  styleUrls: ['./head-bar.component.css']
})
export class HeadBarComponent implements OnInit {

  levels = levels;
  level = this.levels[0];


  constructor() { }

  ngOnInit() {
  }


}
