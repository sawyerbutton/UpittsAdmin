import {Component, OnInit, ViewChild} from '@angular/core';
import {MatPaginator, MatSort, MatTableDataSource} from '@angular/material';

@Component({
  selector: 'app-assign-table',
  templateUrl: './assign-table.component.html',
  styleUrls: ['./assign-table.component.css']
})
export class AssignTableComponent{

  displayedColumns = ['id', 'name', 'gender', 'dob', 'phone', 'address', 'zipcode', 'community', 'state'];
  dataSource: MatTableDataSource<UserData>;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor() {
    // Create 100 users
    const users: UserData[] = [];
    for (let i = 1; i <= 50; i++) { users.push(createNewUser(i)); }

    // Assign the data to the data source for the table to render
    this.dataSource = new MatTableDataSource(users);
  }

  /**
   * Set the paginator and sort after the view init since this component will
   * be able to query its view for the initialized paginator and sort.
   */
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // Datasource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }
}

/** Builds and returns a new User. */
function createNewUser(id: number): UserData {
  const name =
    NAMES[Math.round(Math.random() * (NAMES.length - 1))] + ' ' +
    NAMES[Math.round(Math.random() * (NAMES.length - 1))].charAt(0) + '.';

  return {
    id: id.toString(),
    name: name,
    gender: GENDER[Math.round(Math.random() * (GENDER.length - 1))],
    dob: DOB[Math.round(Math.random() * (DOB.length - 1))],
    phone: PHONE[Math.round(Math.random() * (PHONE.length - 1))],
    address: ADDRESS[Math.round(Math.random() * (ADDRESS.length - 1))],
    zipcode: ZIPCODE[Math.round(Math.random() * (ZIPCODE.length - 1))],
    state: STATE[Math.round(Math.random() * (STATE.length - 1))],
    city: CITY[Math.round(Math.random() * (CITY.length - 1))],
    community: COMMUNITY[Math.round(Math.random() * (COMMUNITY.length - 1))],
    progress: Math.round(Math.random() * 100).toString(),
    color: COLORS[Math.round(Math.random() * (COLORS.length - 1))]
  };
}

/** Constants used to fill up our data base. */
const COLORS = ['maroon', 'red', 'orange', 'yellow', 'olive', 'green', 'purple',
  'fuchsia', 'lime', 'teal', 'aqua', 'blue', 'navy', 'black', 'gray'];
const NAMES = ['Maia', 'Asher', 'Olivia', 'Atticus', 'Amelia', 'Jack',
  'Charlotte', 'Theodore', 'Isla', 'Oliver', 'Isabella', 'Jasper',
  'Cora', 'Levi', 'Violet', 'Arthur', 'Mia', 'Thomas', 'Elizabeth'];
const GENDER = ['Male', 'Female', 'Male', 'Female'];
const PHONE = ['412-392-2032', '412-363-8936', '220-384-8364', '412-384-9932'];
const DOB = ['1987-12-11', '1992-03-17', '1988-08-22', '1996-06-30'];
const ADDRESS = ['2910 Melwood Ave', '1820 Center Ave', '8829 Fifth Ave', '5382 Forbes Ave'];
const ZIPCODE = [12242, 30294, 20433, 13932, 14902, 19302];
const STATE = ['Alaska', 'California', 'Florida', 'Georgia', 'North Carolina', 'New York'];
const CITY = ['Pittsburgh', 'Los Angels', 'New York', 'Seattle', 'Cleavland'];
const COMMUNITY = ['Clinton', 'Franklin', 'Madison', 'Bristol', 'GeorgeTown'];

export interface UserData {
  id: string;
  name: string;
  gender: string;
  dob: string;
  phone: string;
  address: string;
  zipcode: number;
  state: string;
  city: string;
  community: string;
  progress: string;
  color: string;

}
