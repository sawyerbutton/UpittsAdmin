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
  // public passWord: InputAttributes = {name:'password',min:8,max:32,placeholder:'password',type:'password'};
  // public confirmPassword : InputAttributes = {name:'confirmPassword',min:4,max:32,placeholder:'confirm password',type:'password'};
  //
  public firstName :InputAttributes = {name:'firstname',min:4,max:32,placeholder:'first name',type:'text'};
  public midName: InputAttributes = {name:'midname',min:4,max:32,placeholder:'mid name',type:'text'};
  public lastName :InputAttributes = {name:'lastname',min:4,max:32,placeholder:'last name',type:'text'};
  public selectGender :SelectAttributes = {name:'gender',roles:this.gender,placeholder:'gender'};
  public phoneNumber: InputAttributes = {name:'phone',min:8,max:32,placeholder:'phone number',type:'tel'};
  public inputEmail: InputAttributes = {name: 'email', min:8, max:32, placeholder:'email', type: 'email'};
  public date: InputAttributes = {name:'date',min:8,max:10,placeholder:'date of birth (MM/DD/YYYY)',type:'text'};
  public addressOne: InputAttributes = {name:'address1',min:6,max:32,placeholder:'address one',type:'text'};
  public addressTwo: InputAttributes = {name:'address2',min:6,max:32,placeholder:'address two',type:'text'};
  // public selectState: SelectAttributes = {name:'state',roles:this.states,placeholder:'state'};
  // public cities: InputAttributes = {name:'city',min:3,max:32,placeholder:'city',type:'text'};
  // public zipCode :InputAttributes = {name:'zipcode',min:5,max:32,placeholder:'zip code',type:'text'};
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
  // userPasswordPara: string;
  // userConPasswordPara: string;
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
      // password:['',[Validators.required,ValidationService.passwordValidator]],
      // confirmPassword: ['',[Validators.required,Validators.minLength(8)]],
      firstname:['',[ Validators.required,Validators.minLength(4)]],
      midname:['',[Validators.required,Validators.minLength(4)]],
      lastname:['',[Validators.required,Validators.minLength(4)]],
      gender:['',[Validators.required]],
      phone:['',[Validators.required,Validators.minLength(8)]],
      date:['',[Validators.required]],
      address1:['',[Validators.required,Validators.minLength(6)]],
      address2:['',[Validators.required,Validators.minLength(6)]],
      email: ['',[Validators.required,ValidationService.emailValidator]]
      //state:['',[Validators.required]],
      //city:['',[Validators.required,Validators.minLength(3)]],
      //zipcode:['',[Validators.required,Validators.minLength(5)]],
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
      //console.log("username:"+this.userNamePara);
    }
  }

   // getUserPassword(value: string){
   //   if(value){
   //     this.passwordPara = value;
   //     console.log("password:"+this.passwordPara);
   //   }
   // }
  //
  // getUserConPassword(value: string){
  //   if(value){
  //     this.userConPasswordPara = value;
  //     console.log("password:"+this.userConPasswordPara);
  //   }
  // }

  getBlock(value:string){
    if(value){
      this.blockPara = value;
      //console.log("username:"+this.blockPara);
    }
  }

  getFamily(value:string){
    if(value){
      this.familyPara = value;
      //console.log("username:"+this.familyPara);
    }
  }

  getLastName(value:string){
    if(value){
      this.lastNamePara = value;
      //console.log("username:"+this.lastNamePara);
    }
  }

  getFirstName(value:string){
    if(value){
      this.firstNamePara = value;
      //console.log("username:"+this.firstNamePara);
    }
  }

  getMidName(value:string){
    if(value){
      this.midNamePara = value;
      //console.log("username:"+this.midNamePara);
    }
  }

  getGender(value:string){
    if(value){
      this.genderPara = value;
      //console.log("username:"+this.genderPara);
    }
  }

  getPhone(value:string){
    if(value){
      this.phonePara = value;
      //console.log("username:"+this.phonePara);
    }
  }

  getDate(value:string){
    if(value){
      this.datePara = value;
      //console.log("username:"+this.datePara);
      this.dobPara = this.datapipe.transform(this.datePara, "yyyy-MM-dd")
      console.log(this.dobPara);
    }
  }

  getAddressOne(value:string){
    if(value){
      this.addressOnePara = value;
      //console.log("username:"+this.addressOnePara);
    }
  }

  getAddressTwo(value:string){
    if(value){
      this.addressTwoPara = value;
      //console.log("username:"+this.addressTwoPara);
    }
  }

  // getCity(value:string){
  //   if(value){
  //     this.cityPara = value;
  //     console.log("username:"+this.cityPara);
  //   }
  // }

  // getState(value:string){
  //   if(value){
  //     this.statePara = value;
  //     console.log("username:"+this.statePara);
  //   }
  // }
  //
  // getZipcode(value:string){
  //   if(value){
  //     this.zipcodePara = value;
  //     console.log("username:"+this.zipcodePara);
  //   }
  // }

  getEmail(value: string) {
    if (value) {
      this.emailPara = value;
    }
  }

  getRace(value:string){
    if(value){
      this.racePara = value;
      //console.log("username:"+this.racePara);
    }
  }

  getMatrial(value:string){
    if(value){
      this.matrialPara = value;
      //console.log("username:"+this.matrialPara);
    }
  }

  getEmployment(value:string){
    if(value){
      this.empolymentPara = value;
      //console.log("username:"+this.empolymentPara);
    }
  }

  getEducation(value:string){
    if(value){
      this.educationPara = value;
      //console.log("username:"+this.educationPara);
    }
  }

  //http service
  getMembers(): void {
     this.userService.getMembers()
       .subscribe(members => this.members = members);
    // this.userService.getUser("communityMember")
    //   .subscribe((members => this.members = members))
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
      date: this.datePara,
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
