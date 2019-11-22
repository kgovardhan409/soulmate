import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DblinkService } from '../dblink.service';


@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.css']
})
export class UpdateUserComponent implements OnInit {
  userid;
  model;
  constructor(private route: ActivatedRoute,private userHtpp:DblinkService, private router:Router) { }

  ngOnInit() {
    this.userid=this.route.snapshot.params['sno'];
    this.userHtpp.getSingleUser(this.userid).subscribe(data=>{
      console.log(data);
      this.model=data[0];
    })
  }
  onUpdate(userid){
    this.userHtpp.updateUserDetails(this.model,this.userid).subscribe(data=>{
      console.log(data)
      this.router.navigate(['/admin']);
    })
  }

}
