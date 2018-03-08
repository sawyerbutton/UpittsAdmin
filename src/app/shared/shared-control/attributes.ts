export interface InputAttributes {
  name:string;
  min:Number;
  max:Number;
}

export interface SelectAttributes{
  name:string;
  roles: {};
}

export const Admins =  [
  {value: 'system', viewValue: 'System'},
  {value: 'state', viewValue: 'State'},
  {value: 'community', viewValue: 'Community'}
];
