import { Component, OnInit } from '@angular/core';
import {Block, InputAttributes, SelectAttributes} from '../../../../shared/shared-control/attributes';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-create-community',
  templateUrl: './create-community.component.html',
  styleUrls: ['./create-community.component.css']
})
export class CreateCommunityComponent implements OnInit {

  public communityGroup: FormGroup;
  public blocks = Block;

  public selectCounty :SelectAttributes = {name:'county',roles:this.blocks,placeholder:'County'};
  public selectCity: SelectAttributes = {name: 'city', roles:this.blocks, placeholder:'City'};
  public inputCommunity : InputAttributes = {name:'community',min:4,max:32,placeholder:'community',type:'text'};

  //
  countyPara :string;
  cityPara: string;
  communityPara: string;

  constructor(
    public fb: FormBuilder,
  ) { }

  ngOnInit() {
    this.buildForm();
  }

  buildForm(): void {
    this.communityGroup = this.fb.group({
      county: ['', [Validators.required]],
      city: ['', [Validators.required]],
      community:['',[Validators.required,Validators.minLength(4)]]
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

  getCommunity(value:string){
    if(value){
      this.communityPara = value;
      console.log("username:"+this.communityPara);
    }
  }


}

export class family {
  block: string;
  familyName: string;
}
