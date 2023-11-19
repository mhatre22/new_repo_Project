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
  journey(journey: string) {
    if (journey === 'admin') {
      this.commonService.journey = 'admin'
      this.router.navigateByUrl('admin');
    }
    else if (journey === 'owner') {
      this.commonService.journey = 'owner'
      this.router.navigateByUrl('owner');
    }

    else (journey === 'user'); {
      this.commonService.journey = 'user'
      this.router.navigateByUrl('user');
    }
  }
}


