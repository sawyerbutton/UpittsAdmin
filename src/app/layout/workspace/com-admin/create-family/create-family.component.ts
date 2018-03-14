import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {InputAttributes, SelectAttributes} from '../../../../shared/shared-control/attributes';
import { Block} from '../../../../shared/shared-control/attributes';
@Component({
  selector: 'app-create-family',
  templateUrl: './create-family.component.html',
  styleUrls: ['./create-family.component.css']
})
export class CreateFamilyComponent implements OnInit {

  public familyGroup: FormGroup;
  public blocks = Block;

  public selectBlock :SelectAttributes = {name:'block',roles:this.blocks,placeholder:'block'};
  public inputFamily : InputAttributes = {name:'family',min:4,max:32,placeholder:'family',type:'text'};

  //
  blockPara :string;
  familyPara: string;

  constructor(
    public fb: FormBuilder,
  ) { }

  ngOnInit() {
    this.buildForm();
  }

  buildForm(): void {
    this.familyGroup = this.fb.group({
      block: ['', [Validators.required]],
      family:['',[Validators.required,Validators.minLength(4)]]
    })
  }

  getBlock(value:string){
    if(value){
      this.blockPara = value;
      console.log("username:"+this.blockPara);
    }
  }

  getFamily(value:string){
    if(value){
      this.familyPara = value;
      console.log("username:"+this.familyPara);
    }
  }
}
