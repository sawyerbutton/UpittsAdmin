export interface InputAttributes {
  name: string;
  min: Number;
  max: Number;
  placeholder: string;
  type: string;
}

export interface SelectAttributes{
  name: string;
  roles: {};
  placeholder: string;
}

export interface RadioAttributes{
  name: string;
  options: {};
}

export const Admins =  [
  {value: 'system', viewValue: 'System'},
  {value: 'state', viewValue: 'State'},
  {value: 'community', viewValue: 'Community'}
];

