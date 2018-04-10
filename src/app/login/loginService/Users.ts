export class users {
  id: number;
  username: string;
  password: string;
  firstname: string;
  lastname: string;
  phone: string;
  email: string;
  role: string;
  isSys: boolean;
  isState: boolean;
  isCommunity: boolean;
}

export class stateAdmin{
  id: number;
  state: string;
}

export class communityAdmin {
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

export class bhco {
  id: number;
  username: string;
  password: string;
  firstname: string;
  lastname: string;
  phone: string;
  email: string;
  communityid: number;
}

export class member {
  id: number;
  username: string;
  password: string;
  firstname: string;
  lastname: string;
  phone: string;
  email: string;
  communityid: number;
  assignBhco: number;
}
