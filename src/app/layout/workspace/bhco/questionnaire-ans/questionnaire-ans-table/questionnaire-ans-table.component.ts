import {Component, OnInit, ViewChild} from '@angular/core';
import {MatPaginator, MatSort, MatTableDataSource} from '@angular/material';

@Component({
  selector: 'app-questionnaire-ans-table',
  templateUrl: './questionnaire-ans-table.component.html',
  styleUrls: ['./questionnaire-ans-table.component.css']
})
export class QuestionnaireAnsTableComponent{

  displayedColumns = ['id', 'name', 'description', 'answer', 'date'];
  dataSource: MatTableDataSource<QuestionData>;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor() {
    // Create 100 users
    const users: QuestionData[] = [];
    for (let i = 1; i <= 20; i++) { users.push(createNewUser(i)); }

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
function createNewUser(id: number): QuestionData {
  const name =
    NAMES[Math.round(Math.random() * (NAMES.length - 1))] + ' ' +
    NAMES[Math.round(Math.random() * (NAMES.length - 1))].charAt(0) + '.';

  return {
    id: id.toString(),
    name: name,
     des: QUESTION[Math.round(Math.random() * (QUESTION.length - 1))],
    ans: ANS[Math.round(Math.random() * (ANS.length - 1))],
    date: DATE[Math.round(Math.random() * (DATE.length - 1))]
  };
}

/** Constants used to fill up our data base. */
const COLORS = ['maroon', 'red', 'orange', 'yellow', 'olive', 'green', 'purple',
  'fuchsia', 'lime', 'teal', 'aqua', 'blue', 'navy', 'black', 'gray'];
const NAMES = ['Maia', 'Asher', 'Olivia', 'Atticus', 'Amelia', 'Jack',
  'Charlotte', 'Theodore', 'Isla', 'Oliver', 'Isabella', 'Jasper',
  'Cora', 'Levi', 'Violet', 'Arthur', 'Mia', 'Thomas', 'Elizabeth'];
const QUESTION = ['To what extent do you feel that physical pain prevents you from what you need to do?',
                  'Do you have enough energy for everyday activities?', 'Are there times when you do not take your prescribed meds when you are supposed to? (due to cost, access, etc.)',
                  'Do you feel rested upon awaking?'];
const ANS = ['Not at all', 'Moderate Amount', 'Very much', 'Extreme Amount'];
const DATE = ['2018-02-12', '2018-02-30', '2018-01-16', '2018-02-22'];
export interface QuestionData {
  id: string;
  name: string;
  des: string;
  ans: string;
  date: string;
}
