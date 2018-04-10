import { InMemoryDbService } from 'angular-in-memory-web-api';

export class UserDataService implements InMemoryDbService {
  createUserDb() {
    const users = [
      {id: 1, username: "abby", password: "123", firstname: "abb", lastname: "user", phone: "123456780", email: "abby@outlook.com", isSys: true, isState: false, isCommunity: false, isBHCO: false},
      {id: 2, username: "bfer", password: "123", firstname: "bhd", lastname: "user", phone: "123456780", email: "bdeo@outlook.com", isSys: false, isState: true, isCommunity: false, isBHCO: false},
      {id: 3, username: "ckwp", password: "123", firstname: "cdo", lastname: "user", phone: "123456780", email: "cepe@outlook.com", isSys: false, isState: false, isCommunity: true, isBHCO: false},
      {id: 4, username: "dowo", password: "123", firstname: "doe", lastname: "user", phone: "123456780", email: "dnor@outlook.com", isSys: false, isState: false, isCommunity: false, isBHCO: true},
      {id: 5, username: "edppw", password: "123", firstname: "eof", lastname: "user", phone: "123456780", email: "depw@outlook.com", isSys: false, isState: false, isCommunity: false, isBHCO: false},
    ];
    return users;
  }
  createDb() {
    const heroes = [
      { id: 11, name: 'Mr. Nice' },
      { id: 12, name: 'Narco' },
      { id: 13, name: 'Bombasto' },
      { id: 14, name: 'Celeritas' },
      { id: 15, name: 'Magneta' },
      { id: 16, name: 'RubberMan' },
      { id: 17, name: 'Dynama' },
      { id: 18, name: 'Dr IQ' },
      { id: 19, name: 'Magma' },
      { id: 20, name: 'Tornado' }
    ];
    return {heroes};
  }
}
