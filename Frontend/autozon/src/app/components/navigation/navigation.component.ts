import { Component, OnInit, Input } from '@angular/core';
import { INav } from 'src/app/core/models/nav.model';
import { LoginService } from 'src/app/core/services/login/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {
  @Input() toggleDrawer: () => void;
  visitorNav: INav[] = [
    {
      url: '/',
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
      url: '/',
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
      icon: 'logout',
      function: () => this.callLogout()
    }
  ];

  dealerNav: INav[] = [
    {
      url: '/',
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
      icon: 'logout',
      function: () => this.callLogout()
    }
  ];

  links: INav[] = this.visitorNav;
  route: string = window.location.pathname;

  constructor(
    private loginService: LoginService,
    private router: Router
  ) {
    this.toggleDrawer = () => {};
  }

  ngOnInit(): void {
    // Choose nav for role
    this.loginService.getUser().subscribe(res => {
      if (res) {
        let links;
        switch (res.role) {
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

  /**
   * Also navigate if list item instead of link is clicked
   * @param link to which the page should navigate
   */
  navigate(link: INav): void {
    if (link.function !== undefined) {
      this.callLogout();
    } else {
      this.router.navigate([link.url]);
      this.toggleDrawer();
    }
  }

  /**
   * Initiate logout
   */
  callLogout(): void {
    this.loginService.logout().subscribe(res => {
      if (res) {
        this.setLinks(this.visitorNav);
        this.router.navigate(['/login']).then(() => {
          window.location.reload();
        });
      }
    });
  }
}
