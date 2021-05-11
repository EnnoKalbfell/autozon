import { Component, OnInit } from '@angular/core';
import { INav } from 'src/app/core/models/nav.model';
import { LoginService } from 'src/app/core/services/login/login.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss'],
  providers: [LoginService]
})
export class NavigationComponent implements OnInit {
  visitorNav: INav[] = [
    {
      url: '/search',
      name: 'Suche',
      icon: 'search'
    },
    {
      url: '/register',
      name: 'Registrieren',
      icon: 'person_add'
    },
    {
      url: '/login',
      name: 'Anmelden',
      icon: 'login'
    }
  ];

  customerNav: INav[] = [
    {
      url: '/search',
      name: 'Suche',
      icon: 'search'
    },
    {
      url: '/cart',
      name: 'Warenkorb',
      icon: 'shopping_cart'
    },
    {
      url: '/logout',
      name: 'Abmelden',
      icon: 'logout'
    }
  ];

  dealerNav: INav[] = [
    {
      url: '/search',
      name: 'Suche',
      icon: 'search'
    },
    {
      url: '/my-products',
      name: 'Meine Angebote',
      icon: 'local_offer'
    },
    {
      url: '/logout',
      name: 'Abmelden',
      icon: 'logout'
    }
  ];

  links: INav[] = this.visitorNav;
  route: string = window.location.pathname;

  constructor(private loginService: LoginService) {}

  ngOnInit(): void {
    // Choose nav for role
    this.loginService.getUser().subscribe(res => {
      if (res) {
        let links;
        switch(res.role) {
          case 'dealer':
            links = this.dealerNav;
          break;
          case 'customer':
            links = this.customerNav;
          break;
          default:
            links = this.visitorNav;
          break;
        }
        this.setLinks(links);
      }
    });
    this.setLinks(this.visitorNav);
  }

  setLinks(links: INav[]): void {
    this.links = links;
  }
}
