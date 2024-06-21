import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { User } from '../models/user.model';
import { ApiService } from '../services/api.service';
import { Route, Router } from '@angular/router';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-registration-list',
  templateUrl: './registration-list.component.html',
  styleUrls: ['./registration-list.component.scss'],
})

export class RegistrationListComponent implements OnInit {

  public dataSource!: MatTableDataSource<User>;
  public users!: User[];
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  displayedColumns: string[] = ['id', 'firstName', 'lastName', 'email', 'mobile', 'bmiResult', 'gender', 'package', 'enquiryDate', 'action'];

  constructor(
    private api: ApiService, private router: Router, public dialog: MatDialog) {

  }
  ngOnInit(): void {
    this.getUsers();
  }

  getUsers() {
    this.api.getRegisteredUser()
      .subscribe(res => {
        this.users = res;
        this.dataSource = new MatTableDataSource(this.users);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      })
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  edit(id: number) {
    this.router.navigate(['update', id]);
  }

  openDialog(id: number): void {
    const enterAnimationDuration = "0"
    const exitAnimationDuration = "0"
    this.dialog.open(ConfirmDelete, {
      width: '250px',
      enterAnimationDuration,
      exitAnimationDuration,
      data: { userId: id }
    });
  }
}

@Component({
  selector: 'confirm-delete',
  templateUrl: 'confirm-delete.html',
})
export class ConfirmDelete {

  @Input() userId!: number; 

  constructor(
    public dialogRef: MatDialogRef<ConfirmDelete>,
    private api: ApiService) { }

  deleteUser() {

    console.log("Deleting user with ID:", this.userId); 
    //this.api.deleteRegisteredUser(userId)
  }
}


