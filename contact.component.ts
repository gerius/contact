import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import {msgusers } from '../msgusers';
import { Router } from '@angular/router';
import { writeService } from '../msgservice';


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  constructor(private write:writeService,
              private router:Router      ) { }

  ngOnInit() {
  }
  
  onSubmit(form: NgForm){
    const name=form.value['nom'];
    const email=form.value['email'];
    const message=form.value['message'];
    const msg=new msgusers(name,email,message);
    this.write.writeUserData(msg);
    this.router.navigate(['/home']);
  }

}
