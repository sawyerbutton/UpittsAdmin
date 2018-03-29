import {Component, OnInit, ViewChild} from '@angular/core';
import {MatPaginator, MatSort, MatTableDataSource} from '@angular/material';
import {MatChipInputEvent} from '@angular/material';
import {ENTER, COMMA} from '@angular/cdk/keycodes';

@Component({
  selector: 'app-state-admin-list',
  templateUrl: './state-admin-list.component.html',
  styleUrls: ['./state-admin-list.component.css']
})
export class StateAdminListComponent{

  displayedColumns = ['username', 'firstName', 'lastName', 'phone', 'email', 'state'];
  dataSource: MatTableDataSource<StateAdminData>;

  value = ' ';

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor() {
    // Create 100 users
    const users: StateAdminData[] = [];
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

  //filter bar with chips
  visible: boolean = true;
  selectable: boolean = true;
  removable: boolean = true;
  addOnBlur: boolean = true;

  // Enter, comma
  separatorKeysCodes = [ENTER, COMMA];

  states = [
    { name: 'Pennsylvania' },
    { name: 'New York' },
  ];


  add(event: MatChipInputEvent): void {
    let input = event.input;
    let value = event.value;

    // Add our fruit
    if ((value || '').trim()) {
      this.states.push({ name: value.trim() });
    }

    // Reset the input value
    if (input) {
      input.value = '';
    }
  }

  remove(fruit: any): void {
    let index = this.states.indexOf(fruit);

    if (index >= 0) {
      this.states.splice(index, 1);
    }
  }
}

/** Builds and returns a new User. */
function createNewUser(id: number): StateAdminData {
  const name =
    NAMES[Math.round(Math.random() * (NAMES.length - 1))] + ' ' +
    NAMES[Math.round(Math.random() * (NAMES.length - 1))].charAt(0) + '.';

  return {
    id: id.toString(),
    username: name,
    firstName: FIRSTNAME[Math.round(Math.random() * (FIRSTNAME.length - 1))],
    lastName: LASTNAME[Math.round(Math.random() * (LASTNAME.length - 1))],
    phone: PHONE[Math.round(Math.random() * (PHONE.length - 1))],
    email: EMAIL[Math.round(Math.random() * (EMAIL.length - 1))],
    state: STATE[Math.round(Math.random() * (STATE.length - 1))],
    color: COLORS[Math.round(Math.random() * (COLORS.length - 1))]
  };
}

/** Constants used to fill up our data base. */
const COLORS = ['maroon', 'red', 'orange', 'yellow', 'olive', 'green', 'purple',
  'fuchsia', 'lime', 'teal', 'aqua', 'blue', 'navy', 'black', 'gray'];
const NAMES = ['Maia', 'Asher', 'Olivia', 'Atticus', 'Amelia', 'Jack',
  'Charlotte', 'Theodore', 'Isla', 'Oliver', 'Isabella', 'Jasper',
  'Cora', 'Levi', 'Violet', 'Arthur', 'Mia', 'Thomas', 'Elizabeth'];
const FIRSTNAME = ["John", "Tony", "Mia", "Allen", "Jerry"];
const LASTNAME = ["Smith", "White", "Hunt", "Rains"];
const PHONE = ['412-392-2032', '412-363-8936', '220-384-8364', '412-384-9932'];
const EMAIL = ['dewo@gmail.com', 'aaaa@burst.com', 'fnie@outlook.com', 'dnwio@yahoo.com'];
const STATE = ['Alaska', 'California', 'Florida', 'Georgia', 'North Carolina', 'New York', 'Pennsylvania'];

export interface StateAdminData {
  id: string;
  username: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  state: string;
  color: string;
}
