import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/model/User';
import { HttpClientService } from 'src/app/service/http-client.service';

@Component({
  selector: 'app-viewuser',
  templateUrl: './viewuser.component.html',
  styleUrls: ['./viewuser.component.css']
})
// implments OnInit to execute custom initialization logic when the component is created
export class ViewuserComponent implements OnInit {
  @Input()
  user? : User

  constructor(private httpClientService: HttpClientService, private router: Router) {

  }
   @Output()
   userDeleteEvent = new EventEmitter();
  
  ngOnInit(): void {
      
  }
  deleteUser(){
    this.httpClientService.deleteUser(this.user?.id).subscribe(
      (user) => {
        this.userDeleteEvent.emit();
        this.router.navigate(['admin','users']);
      }
    );
  }

}
