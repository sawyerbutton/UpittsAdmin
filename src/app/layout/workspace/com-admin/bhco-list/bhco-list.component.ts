import {Component, OnInit, ViewChild} from '@angular/core';
import {MatPaginator, MatSort, MatTableDataSource} from '@angular/material';

@Component({
  selector: 'app-bhco-list',
  templateUrl: './bhco-list.component.html',
  styleUrls: ['./bhco-list.component.css']
})
export class BhcoListComponent {

  displayedColumns = ['id', 'username', 'password', 'state', 'city', 'community'];
  dataSource: MatTableDataSource<ComAdminData>;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor() {
    // Create 100 users
    const users: ComAdminData[] = [];
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
function createNewUser(id: number): ComAdminData {
  const name =
    NAMES[Math.round(Math.random() * (NAMES.length - 1))] + ' ' +
    NAMES[Math.round(Math.random() * (NAMES.length - 1))].charAt(0) + '.';

  return {
    id: id.toString(),
    username: name,
    password: PWD[Math.round(Math.random() * (PWD.length - 1))],
    state: STATE[Math.round(Math.random() * (STATE.length - 1))],
    city: CITY[Math.round(Math.random() * (CITY.length - 1))],
    community: COMMUNITY[Math.round(Math.random() * (COMMUNITY.length - 1))],
    color: COLORS[Math.round(Math.random() * (COLORS.length - 1))]
  };
}

/** Constants used to fill up our data base. */
const COLORS = ['maroon', 'red', 'orange', 'yellow', 'olive', 'green', 'purple',
  'fuchsia', 'lime', 'teal', 'aqua', 'blue', 'navy', 'black', 'gray'];
const NAMES = ['Maia', 'Asher', 'Olivia', 'Atticus', 'Amelia', 'Jack',
  'Charlotte', 'Theodore', 'Isla', 'Oliver', 'Isabella', 'Jasper',
  'Cora', 'Levi', 'Violet', 'Arthur', 'Mia', 'Thomas', 'Elizabeth'];

const PWD = ['fnfiweo', 'bfiweo', 'fbweoi123', 'nfrew3jd', '33nowmqe', 'bvfouwe12ms'];
const STATE = ['Alaska', 'California', 'Florida', 'Georgia', 'North Carolina', 'New York'];
const CITY = ['Pittsburgh', 'Los Angels', 'New York', 'Seattle', 'Cleavland'];
const COMMUNITY = ['Clinton', 'Franklin', 'Madison', 'Bristol', 'GeorgeTown'];

export interface ComAdminData {
  id: string;
  username: string;
  password: string;
  state: string;
  city: string;
  community: string;
  color: string;
}
