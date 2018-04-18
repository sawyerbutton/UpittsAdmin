import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import { SelectAttributes} from '../../../../shared/shared-control/attributes';
import { InputAttributes } from '../../../../shared/shared-control/attributes';
import { defaultAttributes} from '../../../../shared/shared-control/attributes';
import { ValidationService} from '../../../../shared/validation-service/validation.service';
import { Block} from '../../../../shared/shared-control/attributes';
import { Family} from '../../../../shared/shared-control/attributes';
import { Gender} from '../../../../shared/shared-control/attributes';
import { States} from '../../../../shared/shared-control/attributes';
import { Race } from '../../../../shared/shared-control/attributes';
import { MaritalStatus } from '../../../../shared/shared-control/attributes';
import { Education} from '../../../../shared/shared-control/attributes';
import { Employment} from '../../../../shared/shared-control/attributes';
import { DatePipe } from '@angular/common';
import {Member} from "../../../../model/User";
import {UserService} from "../../../../service/user.service";

@Component({
  selector: 'app-create-c-mem',
  templateUrl: './create-c-mem.component.html',
  styleUrls: ['./create-c-mem.component.css']
})
export class CreateCMemComponent implements OnInit {
  //form group
  public userForm: FormGroup;
  public addressFormGroup: FormGroup;
  public otherFormGroup: FormGroup;
  //front-end para
  public blocks = Block;
  public familys = Family;
  public gender = Gender;
  public states = States;
  public races = Race;
  public matrialS = MaritalStatus;
  public educationS = Education;
  public employmentS = Employment;
  //structure para
  public isLinear = true;
  //validator para
  public selectFamily: SelectAttributes = {name:'family',roles:this.familys,placeholder:'family'};
  public selectBlock :SelectAttributes = {name:'block',roles:this.blocks,placeholder:'block'};
  public userName : InputAttributes = {name:'username',min:4,max:32,placeholder:'username', type: 'text'};

  public firstName :InputAttributes = {name:'firstname',min:4,max:32,placeholder:'first name',type:'text'};
  public midName: InputAttributes = {name:'midname',min:0,max:32,placeholder:'mid name',type:'text'};
  public lastName :InputAttributes = {name:'lastname',min:3,max:32,placeholder:'last name',type:'text'};
  public selectGender :SelectAttributes = {name:'gender',roles:this.gender,placeholder:'gender'};
  public phoneNumber: InputAttributes = {name:'phone',min:10,max:12,placeholder:'phone number',type:'tel'};
  public inputEmail: InputAttributes = {name: 'email', min:8, max:32, placeholder:'email', type: 'email'};
  public date: InputAttributes = {name:'date',min:8,max:10,placeholder:'date of birth (MM/DD/YYYY)',type:'text'};
  public addressOne: InputAttributes = {name:'address1',min:6,max:32,placeholder:'address one',type:'text'};
  public addressTwo: InputAttributes = {name:'address2',min:0,max:32,placeholder:'address two',type:'text'};
  public race: SelectAttributes = {name:'race',roles:this.races,placeholder:'race'};
  public matrialStatus :SelectAttributes = {name:'marital',roles:this.matrialS,placeholder:'marital status'};
  public educations: SelectAttributes = {name:'education',roles:this.educationS,placeholder:'education status'};
  public employments: SelectAttributes = {name:'employment',roles:this.employmentS,placeholder:'employment status'};
  public defaultState: defaultAttributes = {name:'dState',value:'Pennsylvania',type:'text',placeholder:'state'};
  public defaultCounty: defaultAttributes = {name:'dCounty',value:'Allegheny',type:'text',placeholder:'county'};
  public defaultCity: defaultAttributes = {name:'dCity',value:'Pittsburgh',type:'text',placeholder:'city'};
  public defaultCommunity: defaultAttributes = {name:'dCommunity',value:'North Oakland',type:'text',placeholder:'community'};
  public defaultPassword: defaultAttributes = {name: 'dPassword', value: 'imHealthy@2018', type:'text', placeholder:'password'};
  //input value
  userNamePara: string;
  blockPara: string;
  familyPara: string;
  firstNamePara: string;
  lastNamePara: string;
  midNamePara: string;
  genderPara: string;
  phonePara: string;
  datePara: string;
  addressOnePara: string;
  addressTwoPara: string;
  cityPara = this.defaultCity.value;
  statePara = this.defaultState.value;
  countyPara = this.defaultCounty.value;
  communityPara = this.defaultCommunity.value;
  racePara: string;
  matrialPara: string;
  empolymentPara: string;
  educationPara: string;
  emailPara: string;
  dobPara: string;
  passwordPara = this.defaultPassword.value;

  //add a new community member
  newMember: Member;
  members: Member[];
  show: boolean = false;

  constructor(
    private fb:FormBuilder,
    private datapipe : DatePipe,
    private userService: UserService
  ){ }

  ngOnInit() {
    this.getMembers();
    this. buildForm();
  }

  buildForm(): void {
    this.addressFormGroup = this.fb.group({

      block: ['', [Validators.required]],
      family:['',[Validators.required]],
      dState:['',[]],
      dCounty:['',[]],
      dCity:['',[]],
      dCommunity:['',[]],
    });
    this.userForm = this.fb.group({
      username:['',[ Validators.required,Validators.minLength(4)]],
      dPassword:['',[]],
      firstname:['',[ Validators.required,Validators.minLength(4)]],
      midname:['',[Validators.required,Validators.minLength(3)]],
      lastname:['',[Validators.required,Validators.minLength(3)]],
      gender:['',[Validators.required]],
      phone:['',[Validators.required,Validators.minLength(10)]],
      date:['',[Validators.required]],
      address1:['',[Validators.required,Validators.minLength(6)]],
      address2:['',[]],
      email: ['',[Validators.required,ValidationService.emailValidator]]
    });
    this.otherFormGroup = this.fb.group({
      race:['',[Validators.required]],
      marital:['',[Validators.required]],
      education:['',[Validators.required]],
      employment:['',[Validators.required]]
    })
  }

  getUserName(value:string){
    if(value){
      this.userNamePara = value;
    }
  }

  getBlock(value:string){
    if(value){
      this.blockPara = value;
    }
  }

  getFamily(value:string){
    if(value){
      this.familyPara = value;
    }
  }

  getLastName(value:string){
    if(value){
      this.lastNamePara = value;
    }
  }

  getFirstName(value:string){
    if(value){
      this.firstNamePara = value;
    }
  }

  getMidName(value:string){
    if(value){
      this.midNamePara = value;
    }
  }

  getGender(value:string){
    if(value){
      this.genderPara = value;
    }
  }

  getPhone(value:string){
    if(value){
      this.phonePara = value;
    }
  }

  getDate(value:string){
    if(value){
      this.datePara = value;
      this.dobPara = this.datapipe.transform(this.datePara, "yyyy-MM-dd")
      console.log(this.dobPara);
    }
  }

  getAddressOne(value:string){
    if(value){
      this.addressOnePara = value;
    }
  }

  getAddressTwo(value:string){
    if(value){
      this.addressTwoPara = value;
    }
  }

  getEmail(value: string) {
    if (value) {
      this.emailPara = value;
    }
  }

  getRace(value:string){
    if(value){
      this.racePara = value;
    }
  }

  getMatrial(value:string){
    if(value){
      this.matrialPara = value;
    }
  }

  getEmployment(value:string){
    if(value){
      this.empolymentPara = value;
    }
  }

  getEducation(value:string){
    if(value){
      this.educationPara = value;
    }
  }

  //http service
  getMembers(): void {
     this.userService.getMembers()
       .subscribe(members => this.members = members);
  }


  addMember(): void {
    const comMember = new Member({
      username: this.userNamePara,
      password: this.passwordPara,
      firstname: this.firstNamePara,
      midname: this.midNamePara,
      lastname: this.lastNamePara,
      gender: this.genderPara,
      phone: this.phonePara,
      email: this.emailPara,
      date: this.dobPara,
      addressone: this.addressOnePara,
      addresstwo: this.addressTwoPara,
      family: this.familyPara,
      block: this.blockPara,
      community: this.communityPara,
      city: this.cityPara,
      county: this.countyPara,
      state: this.statePara,
      race: this.racePara,
      marry: this.matrialPara,
      education: this.educationPara,
      employments: this.empolymentPara
    });

    this.userService.addMember(comMember)
      .subscribe(member => this.members.push(member));

    this.show = true;
    //console.log(comMember);
  }




}
