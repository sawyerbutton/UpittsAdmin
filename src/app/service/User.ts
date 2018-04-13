export class Member {
  username: string;
  password: string;
  firstname: string;
  midname: string;
  lastname: string;
  gender: string;
  phone: string;
  email: string;
  date: string;
  addressone: string;
  addresstwo: string;
  family: string;
  block: string;
  community: string;
  city: string;
  county: string;
  state: string;
  race: string;
  marry: string;
  education: string;
  employments: string;
  bhcoid: number;

  constructor(options: {
    username?: string;
    password?: string;
    firstname?: string;
    midname?: string;
    lastname?: string;
    gender?: string;
    phone?: string;
    email?: string;
    date?: string;
    addressone?: string;
    addresstwo?: string;
    family?: string;
    block?: string;
    community?: string;
    city?: string;
    county?: string;
    state?: string;
    race?: string;
    marry?: string;
    education?: string;
    employments?: string;
    bhcoid?: number;
  } = {}) {
      this.username = options.username;
      this.password = options.password || '';
      this.firstname = options.firstname || '';
      this.midname = options.midname || '';
      this.lastname = options.lastname || '';
      this.gender = options.gender || '';
      this.phone = options.phone || '';
      this.email = options.email || '';
      this.date = options.date || '';
      this.addressone = options.addressone || '';
      this.addresstwo = options.addresstwo || '';
      this.family = options.family || '';
      this.block = options.block || '';
      this.community = options.community || '';
      this.city = options.city || '';
      this.county = options.county || '';
      this.state = options.state || '';
      this.race = options.race || '';
      this.marry = options.marry || '';
      this.education = options.education || '';
      this.employments = options.employments || '';
      this.bhcoid = options.bhcoid || -1;
  }
}

export class Bhcos {
  username: string;
  password: string;
  firstname: string;
  lastname: string;
  email: string;
  phone: string;
  communityid: number;

  constructor(options: {
    username?: string;
    password?: string;
    firstname?: string;
    lastname?: string;
    email?: string;
    phone?: string;
    communityid?: number;
  } = {} ) {
    this.username = options.username;
    this.password = options.password;
    this.firstname = options.firstname;
    this.lastname = options.lastname;
    this.email = options.email || '';
    this.phone = options.phone || '';
    this.communityid = options.communityid || -1;
  }
}
