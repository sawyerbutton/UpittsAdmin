export class Users {
  id: number;
  username: string;
  password: string;
  firstname: string;
  middlename: string;
  lastname: string;
  phone: string;
  email: string;
  isSys: boolean;
  isState: boolean;
  isCommunity: boolean;
  isBHCO: boolean;
}

export class StateAdmin extends Users{
  id: number;
  state: string;
}

export class CommunityAdmin extends Users{
  id: number;
  communityid: number;
}

export class community {
  id: number;
  name: string;
  city: string;
  county: string;
  state: string;
}

export class Bhco extends Users{
  communityid: number;
}

export class Member extends Users{
  communityid: number;
  assignBhco: number;
}
