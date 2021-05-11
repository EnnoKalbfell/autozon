import { Component, OnInit } from '@angular/core';
import { INav } from 'src/app/core/models/nav.model';
import { LoginService } from 'src/app/core/services/login/login.service';
import { IUser } from 'src/app/core/models/user.model';

@Component({
  selector: 'app-navigation-user',
  templateUrl: './navigation-user.component.html',
  styleUrls: ['./navigation-user.component.scss'],
  providers: [LoginService]
})
export class NavigationUserComponent implements OnInit {
  user: IUser = {
    id: 0,
    lastName: '',
    firstName: '',
    companyName: '',
    email: '',
    phone: '',
    streetAndHouseNumber: '',
    zipCode: '',
    city: '',
    country: '',
    role: '',
    verified: false
  };
  
  constructor(private loginService: LoginService) {}

  ngOnInit(): void {
    // Get authorized user
    this.loginService.getUser().subscribe(res => {
      if (res) {
        this.user = res;
      }
    });
  }
}
