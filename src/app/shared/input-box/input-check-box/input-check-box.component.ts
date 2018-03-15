import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import { CheckAttributes } from '../../shared-control/attributes';

@Component({
  selector: 'app-input-check-box',
  templateUrl: './input-check-box.component.html',
  styleUrls: ['./input-check-box.component.css']
})
export class InputCheckBoxComponent implements OnInit {
  @Input() attrContent : CheckAttributes;
  @Output()  follow = new EventEmitter<boolean>();
  checked = false;
  constructor() { }

  ngOnInit() {
    this.valueChange()
  }

  valueChange(){
    this.follow.emit(this.checked);
  }
}
