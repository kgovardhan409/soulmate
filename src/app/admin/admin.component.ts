import { Component, OnInit } from '@angular/core';
import { DblinkService } from '../dblink.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  totalUsers;
  totalUsersLegnth;
  redColor = 'red';
  constructor(private userHtpp:DblinkService,private router:Router) { }

  ngOnInit() {
    this.userHtpp.getUserlist().subscribe(data=>{
      console.log(data);
      this.totalUsers = data;
      console.log(this.totalUsers);
      this.totalUsersLegnth = this.totalUsers.length;
  }
  );
  
}
deleteUser(uid){
  var r = confirm('Do you really want to delete?');
  if (r) {
    this.userHtpp.deleteUser(uid).subscribe(data => {
      console.log(data);
      this.ngOnInit();
    })
  }
}
}
