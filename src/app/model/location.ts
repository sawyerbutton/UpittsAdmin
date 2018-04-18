export class Community {
  id: number;
  name: string;
  cityid: number;

  constructor(options: {
    id?: number;
    name?: string;
    cityid?: number;
  } = {}) {
    this.id = options.id;
    this.name = options.name;
    this.cityid = options.cityid;
  }
}

export class Blocks {
  id: number;
  name: string;
  startStr: string;
}

export class Family {

}
