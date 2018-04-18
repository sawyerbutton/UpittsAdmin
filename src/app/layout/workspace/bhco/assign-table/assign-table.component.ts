import {Component, OnInit, ViewChild} from '@angular/core';
import {MatPaginator, MatSort, MatTableDataSource} from '@angular/material';
import {Member} from "../../../../model/User";
import {UserService} from "../../../../service/user.service";
import {Observable} from "rxjs/Observable";
import {HttpClient} from "@angular/common/http";
import {merge} from "rxjs/observable/merge";
import {startWith} from "rxjs/operator/startWith";
import {switchMap} from "rxjs/operator/switchMap";
import {catchError} from "rxjs/operators";
import {map} from "rxjs/operator/map";
import {of as observableOf} from 'rxjs/observable/of';

@Component({
  selector: 'app-assign-table',
  templateUrl: './assign-table.component.html',
  styleUrls: ['./assign-table.component.css']
})
export class AssignTableComponent implements OnInit {

  displayedColumns = ['name', 'firstname', 'lastname', 'gender', 'dob', 'phone', 'address', 'zipcode', 'community', 'state'];
  exampleDb: httpRequest | null;
  dataSource = new MatTableDataSource();

  resultsLength = 0;
  isLoadingResults = true;
  isRateLimitReached = false;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  members: Member[];



  constructor(
   private userService: UserService
    //private http: HttpClient
  ) {
    // Create 100 users
    // const users: UserData[] = [];
    // for (let i = 1; i <= 50; i++) { users.push(createNewUser(i)); }
    // this.getMember();
    // Assign the data to the data source for the table to render
    //this.dataSource = new MatTableDataSource(this.members);
  }

  ngOnInit() {
    this.getMember();
   // this.dataSource.data = this.members;
    //console.log(this.members);

    // this.exampleDb = new httpRequest(this.http);
    //
    // this.sort.sortChange.subscribe(() => this.paginator.pageIndex = 0);
    //
    // merge(this.sort.sortChange, this.paginator.page)
    //   .pipe(
    //     startWith({}),
    //     switchMap(() => {
    //       this.isLoadingResults = true;
    //       return this.exampleDb!.getMembers(
    //         this.sort.active, this.sort.direction, this.paginator.pageIndex);
    //     }),
    //     map(data => {
    //       this.isLoadingResults = false;
    //       this.isRateLimitReached = false;
    //       this.resultsLength = data.total_count;
    //       return data.items;
    //     }),
    //     catchError(() => {
    //       this.isLoadingResults = false;
    //       this.isRateLimitReached = true;
    //       return observableOf([]);
    //     })
    //   ).subscribe(data => this.dataSource.data = data);
  }



   getMember() {
     this.userService.getMembers()
       .subscribe(mems => {this.members = mems});
     console.log(this.members);
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
   // this.dataSource.filter = filterValue;
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
    firstName: FIRSTNAME[Math.round(Math.random() * (FIRSTNAME.length - 1))],
    lastName: LASTNAME[Math.round(Math.random() * (LASTNAME.length - 1))],
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
const DOB = ['28', '39', '42', '55', '62', '38', '34'];
const ADDRESS = ['2910 Melwood Ave', '1820 Center Ave', '8829 Fifth Ave', '5382 Forbes Ave'];
const ZIPCODE = [12242, 30294, 20433, 13932, 14902, 19302];
const STATE = ['Murray Street 01', 'Center Ave 04', 'Fifth Ave 03', 'Morewood Ave 18', 'Negley Ave 11'];
const CITY = ['Pittsburgh', 'Los Angels', 'New York', 'Seattle', 'Cleavland'];
const COMMUNITY = ['Clinton', 'Franklin', 'Madison', 'Bristol', 'GeorgeTown'];
const FIRSTNAME = ["John", "Tony", "Mia", "Allen", "Jerry", 'Maia', 'Asher', 'Olivia', 'Atticus', 'Amelia'];
const LASTNAME = ["Smith", "White", "Hunt", "Rains"];

export interface UserData {
  id: string;
  name: string;
  firstName: string;
  lastName: string;
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


export interface TableItem {
  items: Member[];
  total_count: number;
}

export class httpRequest {
  constructor(private http: HttpClient) {}

  getMembers(sort: string, order: string, page: number): Observable<TableItem> {
    const href = 'http://localhost:3000' + '/communityMember'
    return this.http.get<TableItem>(href);
  }
}



