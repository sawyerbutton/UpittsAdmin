import { Component, OnInit } from '@angular/core';
import {Block, InputAttributes, SelectAttributes} from '../../../../shared/shared-control/attributes';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-create-community',
  templateUrl: './create-community.component.html',
  styleUrls: ['./create-community.component.css']
})
export class CreateCommunityComponent implements OnInit {

  public familyGroup: FormGroup;
  public blocks = Block;

  public selectCounty :SelectAttributes = {name:'county',roles:this.blocks,placeholder:'County'};
  public selectCity: SelectAttributes = {name: 'city', roles:this.blocks, placeholder:'City'};
  public inputFamily : InputAttributes = {name:'family',min:4,max:32,placeholder:'community',type:'text'};

  //
  countyPara :string;
  cityPara: string;
  familyPara: string;

  constructor(
    public fb: FormBuilder,
  ) { }

  ngOnInit() {
    this.buildForm();
  }

  buildForm(): void {
    this.familyGroup = this.fb.group({
      county: ['', [Validators.required]],
      city: ['', [Validators.required]],
      family:['',[Validators.required,Validators.minLength(4)]]
    })
  }

  getCounty(value: string){
    if(value){
      this.countyPara = value;
      console.log("county:"+this.countyPara);
    }
  }

  getCity(value: string) {
    if (value) {
      this.cityPara = value;
      console.log("city"+this.cityPara);
    }
  }

  getFamily(value:string){
    if(value){
      this.familyPara = value;
      console.log("username:"+this.familyPara);
    }
  }


}

export class family {
  block: string;
  familyName: string;
}
