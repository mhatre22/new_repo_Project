import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonService } from '../common.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent {
  constructor(private router: Router,
    private commonService: CommonService
   ) { }
   search! :string;
  admin(){
      this.router.navigateByUrl('admin');
    }
    owner(){
    
      this.router.navigateByUrl('owner');
    }

  user(){
      this.router.navigateByUrl('user');
    }

  }



